class TypeClass {
    constructor(raw) {
        _.assign(this, raw);
    }

    /**
     * check if a field is ref
     * return main-title's key if it is ref ,else return null
     * @param fieldName
     * @returns {obj}
     */
    checkAndGetRef(fieldName) {
        const field = _.find(this.form, {key: fieldName});
        if (field && field.type === 'refSelect') {
            const type = field.templateOptions.Type;
            return Types[type].info.title;
        }
    }
}

export default TypeClass;