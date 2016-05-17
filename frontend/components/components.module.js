import angular from 'angular';

import cmsEditable from './cms-editable/module';
import cmsTypes from './cms-types/module';
import cmsContainer from './cms-container/module';
import cmsSitemap from './cms-sitemap/module';
import cmsEditState from './cms-edit-state/module';
import cmsAdmin from './cms-admin/module';

const components = angular.module('components', [
    cmsTypes,
    cmsContainer,
    cmsSitemap,
    cmsEditState,
    cmsAdmin
]);

export default components.name;
