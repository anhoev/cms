### create new element

<pre>
cms.createElement('Adjustment', {
    item: [
        {
            product: $scope.model._id,
            unit: $scope.model.importUnit
        }
    ]
}, model => {
    formService.edit(model._id, 'Adjustment', () => {
    });
})
</pre>