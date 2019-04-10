const express = require('express');
const login = require('./login');
const Auth = require('./auth');
const users = require('./users');
const categories = require('./categories');
const upload = require('./upload');
const logout = require('./logout');
const posts = require('./posts');
const options = require('./options');
const newsletter = require('./newsletter');
const comments = require('./comments');
const notification = require('./notification');
const getName = require('./getName');
const getCounts = require('./getCounts');
const ads = require('./ads');
const heading = require('./heading');
const postsCat = require('./PostsCat');
const services = require('./services');
const layout = require('./layout');
const mail = require('./mail');
const install = require('./install');
const reset = require('./resetPassword');
const search = require('./search');

const router = express.Router();
router
  .post('/login', login.post)
  .get('/installCheck', install.installCheck)
  .post('/install', install.install)
  .get('/logout', logout.get)
  .post('/comments/addComment', comments.post)
  .post('/visitorCounter', options.counterPlus)
  .get('/CatWithPosts/:seo_name', postsCat.get)
  .get('/getRelatedPosts', categories.getRelated)
  .get('/categories/getAll', categories.get)
  .get('/categories/allWithCount', categories.allWithCount)
  .get('/getFile/:name', upload.get)
  .get('/getoptions', options.get)
  .get('/heading', heading.getHero)
  .get('/post/:catSeo/:seo', posts.postSeo)
  .get('/services', services.get)
  .get('/getAds', ads.getAds)
  .post('/newsletter', newsletter.post)
  .get('/layout/homePage', layout.homePage)
  .get('/layout/singlePage', layout.singleHomePage)
  .get('/frontCount', getCounts.frontCount)
  .post('/sendEmail', mail.post)
  .post('/resetPassword', reset.sendEmail)
  .post('/updatePassword', reset.updatePassword)
  .post('/uploadFile', upload.post)
  .post('/removeFile', upload.remove)
  .use(Auth.checkToken)
  .get('/notification/getNotifications', notification.get)
  .post('/notification/seenNotification', notification.seen)
  .get('/post/:id', posts.getPost)
  .get('/posts', posts.get)
  .delete('/posts/delete', posts.delete)
  .post('/post/create', posts.post)
  .post('/post/update', posts.updatePost)
  .get('/getname', getName.get)
  .post('/comment/delete', comments.delete)
  .post('/comment/update', comments.update)
  .get('/comments/getAll', comments.get)
  .get('/lastposts', posts.lastPosts)
  .get('/profile', users.getProfile)
  .post('/profile', users.updateProfile)
  .use(Auth.checkAdmin)
  .post('/search', search.search)
  .post('/layout/update', layout.homePageUpdate)
  .get('/category/:id', categories.getCategoty)
  .get('/getMails', mail.get)
  .get('/lastusers', users.lastUsers)
  .get('/getCounts', getCounts.get)
  .get('/ads', ads.get)
  .get('/ads/:id', ads.getById)
  .post('/ads/update', ads.update)
  .post('/categories/create', categories.post)
  .post('/category/update', categories.updateCategory)
  .delete('/category/delete', categories.delete)
  .post('/option', options.update)
  .get('/newsletter', newsletter.get)
  .delete('/newsletter/delete', newsletter.delete)
  .post('/ads', ads.post)
  .delete('/ads', ads.delete)
  .get('/noheading', heading.get)
  .post('/heading', heading.addHero)
  .post('/removeheading', heading.removeHero)
  .post('/services', services.post)
  .delete('/services/delete', services.delete)
  .get('/service/:id', services.getService)
  .post('/services/update', services.update)
  .post('/post/changeState', posts.changeState)
  .get('/users/getAll', users.get)
  .post('/users/create', users.post)
  .delete('/users/delete', users.delete)
  .post('/updateuser', users.updateUser)
  .get('/user/:id', users.getUser)
  .post('/sendPostToEmails', newsletter.sendPostToEmails)
  .post('/sendEmail', newsletter.sendEmail)
  // ////mailRoutes
  .post('/edit/starred', mail.editStarred)
  .post('/edit/detele', mail.editDeleted)
  .post('/edit/important', mail.editImportant)
  .post('/edit/read', mail.editRead);
module.exports = router;
