import {Application, Response, Request} from "express";

// route
import dashboardsRoute from './dashboard.route';
import topicRoute from './topic.route';
import songRoute from './song.route';
import userRoute from './user.route';
import permissionRoute from './permission.route';
import roleRoute from './role.route';
import singerRoute from './singer.route';
import authRoute from './auth.route';
import managerRoute from './manager.route';
import profileRoute from './profile.route';
import verificationRoute from './verification.route';
import generalSettingRoute from './setting.route'; 

// middleware
import {isAuthenticated} from '../../../common/middleware/authServer.middleware'
import {rateLimitAuthMiddlewareAdmin, rateLimitAdmin} from "../../../common/middleware/rateLimitAuth.middleware";

// config
import prefixNameConfig from '../../../common/config/prefixName.config';

export default (app: Application) => {
    app.use(prefixNameConfig.PATH_ADMIN + '/dashboard', isAuthenticated, rateLimitAdmin, dashboardsRoute);

    app.use(prefixNameConfig.PATH_ADMIN + '/topic', isAuthenticated, rateLimitAdmin, topicRoute);

    app.use(prefixNameConfig.PATH_ADMIN + '/song', isAuthenticated, rateLimitAdmin,songRoute);

    app.use(prefixNameConfig.PATH_ADMIN + '/user', isAuthenticated, rateLimitAdmin, userRoute);

    app.use(prefixNameConfig.PATH_ADMIN + '/permission', isAuthenticated, rateLimitAdmin, permissionRoute);

    app.use(prefixNameConfig.PATH_ADMIN + '/singer', isAuthenticated, rateLimitAdmin, singerRoute);

    app.use(prefixNameConfig.PATH_ADMIN + '/role', isAuthenticated, rateLimitAdmin, roleRoute);

    app.use(prefixNameConfig.PATH_ADMIN + '/manager', isAuthenticated, rateLimitAdmin, managerRoute);

    app.use(prefixNameConfig.PATH_ADMIN + '/profile', isAuthenticated, rateLimitAdmin, profileRoute);

    app.use(prefixNameConfig.PATH_ADMIN + '/verification', isAuthenticated, rateLimitAdmin, verificationRoute);

    app.use(prefixNameConfig.PATH_ADMIN + '/setting', isAuthenticated, rateLimitAdmin, generalSettingRoute);

    app.use(prefixNameConfig.PATH_ADMIN + '/auth', rateLimitAuthMiddlewareAdmin, authRoute);
}