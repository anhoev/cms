class QueryBuilder {
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
        if (_query) this._query = JSON.stringify(_query);
        return this;
    }

    build() {
        this._skip = (this._page - 1) * this._limit;

        let params = '';
        if (this._limit) params += `limit=${this._limit}`;
        if (this._skip) params += `&skip=${this._skip}`;
        if (this._query) params += `&query=${this._query}`;
        if (this._sort) params += `&sort=${this._sort}`;
        return params;
    }
}

export default QueryBuilder;