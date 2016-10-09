export declare class CmsService {
    /**
     <pre><code>
     cms.execServerFn('PlanView', $scope.model, 'getPlan',
        $scope.data.month, $scope.data.company, $scope.data.position).then(({data:{weeks, employees, emptyShifts}}) => {});
     </pre></code>
     **/
    execServerFn(type: String, model: Object, fn: String, ...args: Object[]): Promise
}