import {Application} from "express";

// route
import topicRoute from './topic.route';
import songRoute from './song.route';
import apiCommentRoute from './api.route';
import userRoute from './auth.route';
import singerRoute from './singer.route';
import profileRoute from './profile.route';
import notification from './notification.route';
import playlistRoute from './playlist.route';
import feedRoute from './feed.route';
import homeRoute from './home.route';
import contactRoute from './contact.route';
import verificationRoute from './verification.route';

// middleware
import {isAuthenticated} from '../../../common/middleware/auth.middleware'
import {generalSettingMiddleware} from "../../../common/middleware/generalSetting.middleware";
import {rateLimitAuthMiddlewareClient} from "../../../common/middleware/rateLimitAuth.middleware";

export default (app: Application) => {
    app.use('/maintenance', (req, res) => {
        res.render('maintenance/index');
    });

    app.use(generalSettingMiddleware);

    app.get('/', (req, res) => {
        res.redirect('/home');
    });

    app.use('/home', isAuthenticated, rateLimitAuthMiddlewareClient, homeRoute);

    app.use('/topic', isAuthenticated, rateLimitAuthMiddlewareClient, topicRoute);

    app.use('/song', isAuthenticated, rateLimitAuthMiddlewareClient, songRoute);

    app.use('/api', isAuthenticated, rateLimitAuthMiddlewareClient, apiCommentRoute);

    app.use('/singer', isAuthenticated, rateLimitAuthMiddlewareClient, singerRoute);

    app.use('/profile', isAuthenticated, rateLimitAuthMiddlewareClient, profileRoute);

    app.use('/notification', isAuthenticated, rateLimitAuthMiddlewareClient, notification);

    app.use('/playlist', isAuthenticated, rateLimitAuthMiddlewareClient, playlistRoute);

    app.use('/feed', isAuthenticated, rateLimitAuthMiddlewareClient, feedRoute);

    app.use('/verification', isAuthenticated, rateLimitAuthMiddlewareClient, verificationRoute);

    app.use('/contact', isAuthenticated, rateLimitAuthMiddlewareClient, contactRoute);

    app.use('/auth', rateLimitAuthMiddlewareClient, userRoute);
}