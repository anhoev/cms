'use strict';

module.exports = (cms) => {

    const {mongoose, utils:{makeSelect, makeMultiSelect, makeTypeSelect, makeStyles, makeCustomSelect}} = cms;

    cms.registerWrapper('EmployeeForm', {
        formatter: `
        <h4>Form</h4>
    `,
        mTemplate: `
    <GridLayout columns="*" rows="auto,auto,auto,auto" [init]="fn.init()">
        <TextField row="1" [(ngModel)]="model.name" hint="Name"></TextField>
        <TextField row="2" [(ngModel)]="model.maxHour" hint="maxHour"></TextField>
        <TextField row="3" [(ngModel)]="model.position" hint="Position"></TextField>
    </GridLayout>
    <Button text="Submit" (tap)="fn.submit()" horizontalAlignment="left" ></Button>
    `,
        fn: {
            init: function () {
                this.position = 'Waiter';
                this.positions = ['Waiter', 'Manager', 'Chef'];
            },
            submit: function () {
                cms.createModel('Employee', null, {name: this.name, maxHour: this.maxHour, position: this.position});
            },
            link: function () {
                try {
                    this.router.navigate(['Cat']);
                } catch (e) {
                }
            }
        },
        serverFn: {}
    });


    cms.registerWrapper('Info', {
        formatter: `
        <div ng-init="fn.onInit()">
            <div >
                <div class="form-group">
                    <label>Begin:</label>
                    <input type="date" class="form-control" ng-model="model.start">
                </div>
                
                <div class="form-group">
                    <label>End:</label>
                    <input type="date" class="form-control" ng-model="model.end">
                </div>
                
                <button ng-click="model.calculateRange(model.start,model.end)">Calculate</button>
            </div>
            
            <div ng-if="model._calculated">
                <div ng-repeat="week in model.weeks">
                    <h4>Week {{$index}}</h4>
                    <table border="1">
                        <tr>
                            <th ng-repeat="_day in model.weekday2" style="padding-left: 20px;padding-right: 20px" ng-init="_index = $index">
                                <p>{{model.weekday[_day]}}</p>
                                <div ng-repeat="day in week">
                                    <div ng-if="day.day.getDay() === _day">
                                        {{day.day.getDate()}}/{{day.day.getMonth() +1}}
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <tr style="padding-top: 10px;padding-bottom: 10px;">
                            <td ng-repeat="_day in model.weekday2" style="padding-left: 20px;padding-right: 20px">
                                <div ng-repeat="day in week">
                                    <div ng-if="day.day.getDay() === _day">
                                        <div ng-repeat="shift in day.shifts" ng-init="employee = shift.employee">
                                            <div ng-if="employee !== null">
                                                <p>{{shift.beginHour}} - {{shift.endHour}}</p>
                                                <p>{{employee.name}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                
                <hr>
                
                <div ng-repeat="employee in model.employees" ng-init="shifts = employee.subMenge">
                    <h4>Name: {{employee.name}}</h4>
                    <div ng-repeat="shift in shifts">
                        Date: {{shift.day}}.{{shift.month}},weekDay:{{shift.weekDay}}, beginHour: {{shift.beginHour}}, endHour: {{shift.endHour}}
                    </div>
                </div>
            </div>
            
        </div>
    `,
        mTemplate: `
        <StackLayout [init]="fn.onInit()">
            <Button text="Refresh" (tap)="fn.onInit()"></Button>
            <StackLayout *ngFor="#employee of model.employees">
                <Label text="Name: {{employee.name}}"></Label>
                <StackLayout *ngFor="#shift of employee.subMenge">
                    <Label text="Date: {{shift.day}}.{{shift.month}},beginHour: {{shift.beginHour}}, endHour: {{shift.endHour}}">
                    </Label>
                </StackLayout>
            </StackLayout>
        </StackLayout>
    `,
        ID: String,
        fn: {
            getShifts: function () {
                return Types.Shift.list.map(shift => {
                    shift.$workingTime = Types.Shift.fn.getWorkingTime.bind(shift)();
                    return shift;
                });
            },
            onInit: function () {
                const weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

                function shuffle(array) {
                    var currentIndex = array.length, temporaryValue, randomIndex;

                    // While there remain elements to shuffle...
                    while (0 !== currentIndex) {

                        // Pick a remaining element...
                        randomIndex = Math.floor(Math.random() * currentIndex);
                        currentIndex -= 1;

                        // And swap it with the current element.
                        temporaryValue = array[currentIndex];
                        array[currentIndex] = array[randomIndex];
                        array[randomIndex] = temporaryValue;
                    }

                    return array;
                }

                function createNextMenge(menge) {
                    return menge.map(shift => {
                        return {workingTime: shift.workingTime, name: `S${parseInt(shift.name.substring(1)) + length}`};
                    });
                }

                function sum(menge) {
                    let s = 0;
                    menge.forEach(item => s += item ? item.workingTime : 0);
                    return s ? s : 0;
                }

                function getDaysInMonth(d1, m1, y1, d2, m2, y2) {
                    var date1 = new Date(y1, m1 - 1, d1);
                    var date2 = new Date(y2, m2 - 1, d2);
                    var days = [];
                    while (date1 <= date2) {
                        days.push(new Date(date1));
                        date1.setDate(date1.getDate() + 1);
                    }
                    return days;
                }


                function genShifts(d1, m1, y1, d2, m2, y2) {
                    const days = getDaysInMonth(d1, m1, y1, d2, m2, y2);
                    let shifts = Types.Shift.list.map(shift => {
                        return {
                            beginHour: shift.beginHour,
                            endHour: shift.endHour < shift.beginHour ? shift.endHour + 24 : shift.endHour,
                            workingTime: Types.Shift.fn.getWorkingTime.bind(shift)(),
                            weekDay: shift.weekDay,
                            _id: shift._id
                        };
                    });
                    const result = [];
                    const _days = days.map(day => {
                        const shiftsInDay = JsonFn.clone(_.filter(shifts, shift => shift.weekDay === weekday[day.getDay()]));
                        shiftsInDay.forEach(s => {
                            s.day = day.getDate(), s.month = day.getMonth()
                        });
                        Array.prototype.push.apply(result, shiftsInDay);
                        return {day, shifts: shiftsInDay}
                    })


                    return {shifts: result, days: _days};
                }

                function isConflict(shift1, shift2) {
                    if (shift1.day === shift2.day) {
                        if (shift1.endHour > shift2.beginHour) return true;
                    }
                    return false;
                }


                function softByBeginHour(shifts) {
                    return shifts.sort((shift1, shift2) => {
                        if (shift1.month < shift2.month) return -1;
                        if (shift1.month > shift2.month) return 1;
                        if (shift1.day < shift2.day) return -1;
                        if (shift1.day > shift2.day) return 1;
                        return shift1.beginHour - shift2.beginHour;
                    });
                }

                function isConflictWithList(shifts, shift) {
                    let conflict = false;
                    shifts.forEach(s => {
                        if (s.beginHour <= shift.beginHour && isConflict(s, shift)) conflict = true
                        if (s.beginHour >= shift.beginHour && isConflict(shift, s)) conflict = true
                    });
                    return conflict;
                }

                function assignShiftToPersons(shifts, employees, days) {
                    shifts = shuffle(shifts);

                    for (let employee of employees) {
                        let subMenge = [];
                        const conflictArray = [];
                        while (shifts.length > 0 && sum(subMenge) + shifts[0].workingTime < employee.maxHour && conflictArray.length < shifts.length) {
                            subMenge = softByBeginHour(subMenge);
                            const shift = shifts.shift();
                            if (isConflictWithList(subMenge, shift)) {
                                shifts.push(shift);
                                conflictArray.push(shift);
                            } else {
                                subMenge.push(shift);
                            }
                        }
                        employee.sum = sum(subMenge);
                        employee.subMenge = softByBeginHour(subMenge);
                    }

                    function smartPush() {
                        const _shift = shifts.shift();
                        if (!_shift) return false;
                        const last = employees[employees.length - 1];
                        for (let employee of employees.filter((e, i) => i !== employees.length - 1)) {
                            const subMenge = employee.subMenge;
                            const maxHour = employee.maxHour;
                            for (let shift of subMenge) {
                                if (shift.workingTime + (maxHour - sum(subMenge)) >= _shift.workingTime) {
                                    if (!isConflictWithList(last.subMenge, shift) && sum(last.subMenge.concat(shift)) < last.maxHour) {
                                        // swap
                                        _.remove(subMenge, shift);
                                        last.subMenge.push(shift);
                                        subMenge.push(_shift);
                                        return shifts.length === 0 ? false : true;
                                    }

                                }
                            }
                        }
                        return shifts.length === 0 ? false : true;
                    }

                    while (smartPush()) {
                    }


                    for (let employee of employees) {
                        for (let shift of employee.subMenge) {
                            // assign to days

                            const day = _.find(days, day => {
                                return _.contains(day.shifts, shift);
                            });

                            for (let _shift of day.shifts) {
                                if (_shift === shift) {
                                    _shift.employee = employee;
                                }
                            }
                        }
                    }

                }

                try {
                    const model = this;
                    this.calculate = function (d1, m1, y1, d2, m2, y2) {
                        const employees = JsonFn.clone(Types.Employee.list).sort((e1, e2) => e1.maxHour - e2.maxHour);
                        const {shifts, days} = genShifts(d1, m1, y1, d2, m2, y2);
                        assignShiftToPersons(shifts, employees, days);
                        model.employees = employees;
                        model.days = days;
                        const weeks = [];
                        let week = [];
                        days.forEach(day => {
                            week.push(day);
                            if (day.day.getDay() === 0) {
                                weeks.push(week);
                                week = [];
                            }
                        })
                        if (week.length > 0) weeks.push(week);

                        model.weeks = weeks;
                    }
                    this.calculateRange = function (date1, date2) {
                        this._calculated = true;
                        this.calculate(date1.getDate(), date1.getMonth() + 1, date1.getFullYear(), date2.getDate(), date2.getMonth() + 1, date2.getFullYear())
                    }
                    /*this.model.start = new Date(1, 2, 2016);
                     this.model.end = new Date(31, 2, 2016);*/
                    this.calculate(1, 3, 2016, 31, 3, 2016);
                    this._calculated = false;
                    this.weekday = weekday;
                    this.weekday2 = [1, 2, 3, 4, 5, 6, 0];
                } catch (e) {
                    // console.warn(e);
                }
            }
        }
    });

    const Company = cms.registerSchema({
        name: {type: String, default: 'Name'}
    }, {
        name: 'Company',
        formatter: `
            <h4>{{model.name}}</h4>
        `,
        title: 'name',
        isViewElement: false,
        mTemplate: `
            <StackLayout>
                <Label text="{{model.name}}"></Label>
            </StackLayout>
        `
    });

    const Employee = cms.registerSchema({
        name: {type: String, default: 'Employee'},
        position: {type: String, form: makeSelect('waiter', 'chef', 'manager')},
        maxHour: Number,
        company: {type: mongoose.Schema.Types.ObjectId, ref: 'Company', autopopulate: true}
    }, {
        name: 'Employee',
        formatter: `
            <h4>{{model.name}} - {{model.position}} - {{model.maxHour}}</h4>
        `,
        title: 'name',
        isViewElement: false,
        mTemplate: `
            <StackLayout>
                <Label text="{{model.name}} - {{model.position}} - {{model.maxHour}}"></Label>
            </StackLayout>
        `,
        fn: {
            order: function () {
            }
        },
        autopopulate: true

    });

    const Shift = cms.registerSchema({
        weekDay: {
            type: String,
            form: makeSelect('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday')
        },
        beginHour: Number,
        endHour: Number,
        company: {type: mongoose.Schema.Types.ObjectId, ref: 'Company', autopopulate: true}
    }, {
        name: 'Shift',
        formatter: `
            <h4>{{model.weekDay}} - {{model.beginHour}}-{{model.endHour}}</h4>
        `,
        title: 'name',
        isViewElement: false,
        mTemplate: `
            <StackLayout>
                <Label [text]="model.name+' - '+model.weekDay+' - '+ model.beginHour+' - '+model.endHour"></Label>
            </StackLayout>
        `,
        fn: {
            getWorkingTime: function () {
                return this.endHour < this.beginHour ? 24 + this.endHour - this.beginHour : this.endHour - this.beginHour;
            }
        },
        autopopulate: true
    });
}