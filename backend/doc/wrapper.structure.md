## wrapper

### Programmatic

How to get:
backend:

    cms.Wrapper.list[scope.name]
    
### List

How to get:
backend:

    const model = (yield cms.Types.Wrapper.Model.findOne({name:scope.name})).toJSON();
    

#### With Fragment

#### Without Fragment

### Element