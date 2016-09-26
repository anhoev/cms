import common from "../../common/common.module";
import cmsNav from "./cms-nav.directive";
import cmsAdmin from "../cms-admin/module";
import cmsTypes from "../cms-types/module";
import cmsSitemap from "../cms-sitemap/module";
import cmsEditState from "../cms-edit-state/module";

const module = angular
    .module('components.cmsNav', [common, cmsAdmin, cmsTypes, cmsSitemap, cmsEditState])
    .directive('cmsNav', cmsNav);

export default module.name;