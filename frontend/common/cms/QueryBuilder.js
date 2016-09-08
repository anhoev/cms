class QueryBuilder {
    constructor() {
        this._part = false;
        this._query = [];
    }

    part(part) {
        this._part = part;
        return this;
    }

    limit(limit) {
        this._limit = limit;
        return this;
    }

    page(_page) {
        this._page = _page;
        return this;
    }

    sort(_sort) {
        if (_sort) this._sort = JSON.stringify(_sort);
        return this;
    }

    query(_query) {
        if (_query) this._query.push(_query);
        return this;
    }

    search(_search) {
        if (_search) this._search = _search;
        return this;
    }

    populate(_populate) {
        if (_populate) this._populate = _populate;
        return this;
    }

    build() {
        this._skip = (this._page - 1) * this._limit;

        let params = '';
        if (this._limit) params += `limit=${this._limit}`;
        if (this._skip) params += `&skip=${this._skip}`;
        if (this._query) params += `&query=${JSON.stringify(this._query)}`;
        if (this._sort) params += `&sort=${this._sort}`;
        return params;
    }

    buildJson() {
        this._skip = (this._page - 1) * this._limit;

        let query;
        if (this._search && this._query) {
            query = {$and: [{$text: {$search: this._search}}, ...this._query]}
        } else if (this._search) {
            query = {$text: {$search: this._search}};
        } else if (this._query.length > 0) {
            query = {$and: [...this._query]};
        }

        const result = {};

        if (this._limit) result.limit = this._limit;
        if (this._skip) result.skip = this._skip;
        if (query) result.query = query;
        if (this._sort) result.limit = this._sort;
        if (this._part) result.limit = this._part;
        if (this._populate) result.populate = this._populate;

        return result;
    }
}

export default QueryBuilder;