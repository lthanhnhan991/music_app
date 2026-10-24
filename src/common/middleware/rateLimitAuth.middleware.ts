import rateLimit from 'express-rate-limit';
import {Request, Response} from 'express';
import prefixNameConfig from '../config/prefixName.config'

export const rateLimitAuthMiddlewareClient = rateLimit({
    windowMs: 5 * 60 * 1000,
    limit: 100,
    handler: (req: Request, res: Response) => {
        req.flash('error', 'Bạn đăng nhập quá nhiều lần, thử lại sau 5 phút');
        res.redirect('/auth/login');
    }
});

export const rateLimitClient = rateLimit({
    windowMs: 5 * 60 * 1000,
    limit: 100,
    handler: (req: Request, res: Response) => {
        req.flash('error', 'Bạn truy cập quá nhiều lần, thử lại sau 5 phút');
        res.redirect('/home');
    }
});

export const rateLimitAuthMiddlewareAdmin = rateLimit({
    windowMs: 5 * 60 * 1000,
    limit: 5,
    handler: (req: Request, res: Response) => {
        req.flash('error', 'Bạn đăng nhập quá nhiều lần, thử lại sau 5 phút');
        res.redirect(`/${prefixNameConfig.PATH_ADMIN}/auth/login`);
    }
});

export const rateLimitAdmin = rateLimit({
    windowMs: 5 * 60 * 1000,
    limit: 100,
    handler: (req: Request, res: Response) => {
        req.flash('error', 'Bạn truy cập quá nhiều lần, thử lại sau 5 phút');
        res.redirect(`/${prefixNameConfig.PATH_ADMIN}/auth/login`);
    }
});