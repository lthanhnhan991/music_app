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
import {rateLimitAuthMiddlewareAdmin} from "../../../common/middleware/rateLimitAuth.middleware";

// config
import prefixNameConfig from '../../../common/config/prefixName.config';

export default (app: Application) => {
    app.use(prefixNameConfig.PATH_ADMIN + '/dashboard', isAuthenticated, rateLimitAuthMiddlewareAdmin, dashboardsRoute);

    app.use(prefixNameConfig.PATH_ADMIN + '/topic', isAuthenticated, rateLimitAuthMiddlewareAdmin, topicRoute);

    app.use(prefixNameConfig.PATH_ADMIN + '/song', isAuthenticated, rateLimitAuthMiddlewareAdmin,songRoute);

    app.use(prefixNameConfig.PATH_ADMIN + '/user', isAuthenticated, rateLimitAuthMiddlewareAdmin, userRoute);

    app.use(prefixNameConfig.PATH_ADMIN + '/permission', isAuthenticated, rateLimitAuthMiddlewareAdmin, permissionRoute);

    app.use(prefixNameConfig.PATH_ADMIN + '/singer', isAuthenticated, rateLimitAuthMiddlewareAdmin, singerRoute);

    app.use(prefixNameConfig.PATH_ADMIN + '/role', isAuthenticated, rateLimitAuthMiddlewareAdmin, roleRoute);

    app.use(prefixNameConfig.PATH_ADMIN + '/manager', isAuthenticated, rateLimitAuthMiddlewareAdmin, managerRoute);

    app.use(prefixNameConfig.PATH_ADMIN + '/profile', isAuthenticated, rateLimitAuthMiddlewareAdmin, profileRoute);

    app.use(prefixNameConfig.PATH_ADMIN + '/verification', isAuthenticated, rateLimitAuthMiddlewareAdmin, verificationRoute);

    app.use(prefixNameConfig.PATH_ADMIN + '/setting', isAuthenticated, rateLimitAuthMiddlewareAdmin, generalSettingRoute);

    app.use(prefixNameConfig.PATH_ADMIN + '/auth', rateLimitAuthMiddlewareAdmin, authRoute);
}