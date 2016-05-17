const path = require('path');
const unless = require('express-unless');
const cheerio = require('cheerio');

module.exports = (cms) => {
    const {app, data: {security}} = cms;
    const User = cms.registerSchema({
        email: {
            type: String,
            form: {
                type: 'input',
                templateOptions: {
                    type: 'email',
                    label: 'Email'
                }
            }
        },
        password: {
            type: String,
            form: {
                type: 'input',
                templateOptions: {
                    type: 'password',
                    label: 'Password'
                }
            }
        },
        role: {
            type: String,
            default: 'new name',
            form: {
                type: 'select',
                templateOptions: {
                    label: 'Role',
                    options: [
                        {name: 'Admin', value: 'Admin'},
                        {name: 'User', value: 'User'}
                    ]
                }
            }
        }
    }, {name: 'User', formatterUrl: path.resolve(__dirname, 'user.jade'), title: 'email'});

    cms.User = User;

    /*const securityLayer = (req, res, next)=> Q.spawn(function* () {
     const {user} = req.session;
     if (!user) return res.redirect('/cms-login');
     next();
     });

     securityLayer.unless = unless;

     if (security) {
     app.use(securityLayer.unless({
     path: [{url: '/cms-login', methods: ['GET', 'POST']}]
     }))
     }*/

    app.get('/cms-login', function*(req, res) {
        res.send(cms.compile(path.resolve(__dirname, 'login.jade'))());
    })

    app.post('/cms-login', function*({body: {email, password, remember}, session}, res) {
        const user = yield User.findOne({email, password}).exec();
        if (user) {
            session.adminMode = user.role === 'Admin';
            session.user = user;
            return res.redirect(cms.data.baseUrlPath);
        } else {
            const $ = cheerio.load(cms.compile(path.resolve(__dirname, 'login.jade'))());
            $('#alert').removeClass('hide');
            res.send($.html());
        }
    })
}