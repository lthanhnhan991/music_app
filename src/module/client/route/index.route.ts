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
import {rateLimitAuthMiddlewareClient, rateLimitClient} from "../../../common/middleware/rateLimitAuth.middleware";

export default (app: Application) => {
    app.use('/maintenance', (req, res) => {
        res.render('maintenance/index');
    });

    app.use(generalSettingMiddleware);

    app.get('/', (req, res) => {
        res.redirect('/home');
    });

    app.use('/home', isAuthenticated, rateLimitClient, homeRoute);

    app.use('/topic', isAuthenticated, rateLimitClient, topicRoute);

    app.use('/song', isAuthenticated, rateLimitClient, songRoute);

    app.use('/api', isAuthenticated, rateLimitClient, apiCommentRoute);

    app.use('/singer', isAuthenticated, rateLimitClient, singerRoute);

    app.use('/profile', isAuthenticated, rateLimitClient, profileRoute);

    app.use('/notification', isAuthenticated, rateLimitClient, notification);

    app.use('/playlist', isAuthenticated, rateLimitClient, playlistRoute);

    app.use('/feed', isAuthenticated, rateLimitClient, feedRoute);

    app.use('/verification', isAuthenticated, rateLimitClient, verificationRoute);

    app.use('/contact', isAuthenticated, rateLimitClient, contactRoute);

    app.use('/auth', rateLimitAuthMiddlewareClient, userRoute);
}