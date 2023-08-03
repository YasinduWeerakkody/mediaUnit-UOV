import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import front from '../views/mediaUnit/front.vue'
import front1 from '../views/mediaUnit/front1.vue'
import photolio from '../views/mediaUnit/photolio.vue'
import recervationRegistration from '../views/recervationRegistration/recervationRegistration.vue'
import LoginRecervation from '../views/login/LoginRecervation.vue'
import requestReservation from '../views/RequestforReservation/RequestReservation.vue'
import registrationphotography from '../views/registrationphotography/registrationphotography.vue'
import registrationArticle from '../views/registrationArticle/registrationArticle.vue'
import registrationAnnouncer from'../views/registrationAnnouncer/registrationAnnouncer.vue'
import joinourteam from'../views/joinourteam/joinourteam.vue'
import annoncing from '../views/mediaUnit/annoncing.vue'
import photographypage from '../views/photographypage/photographypage.vue'
import articlepage from'../views/articlepage/articlepage.vue'
import announcingpage from'../views/announcingpage/announcingpage.vue'
import adminpage from '../views/adminpage/adminpage.vue'
import joinLogin from '../views/joinLogin/joinLogin.vue'
import joinRegistration from '../views/joinRegistration/joinRegistration.vue'
import loginPhotography from '../views/loginPhotography/loginPhotography.vue'
import loginannouncer from '../views/loginannouncer/loginannouncer.vue'
import loginarticle from'../views/loginarticle/loginarticle.vue'
import imageUpload from'../views/imageUpload/imageUpload.vue'
import team from'../views/mediaUnit/team.vue'
import announceradmin from'../views/adminpage/announceradmin.vue'
import articleadmin from'../views/adminpage/articleadmin.vue'
import contact from'../views/mediaUnit/contact.vue'
import about from'../views/mediaUnit/about.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'front1',
      component: front1
    },
    {
      path: '/front',
      name: 'front',
      component: front
    },

    {
      path: '/photolio',
      name: 'photolio',
      component: photolio
    },
    {
      path: '/recervationRegistration',
      name: 'recervationRegistration',
      component: recervationRegistration
    },
    {
      path: '/LoginRecervation',
      name: 'LoginRecervation',
      component: LoginRecervation
    },
    {
      path: '/requestReservation',
      name: 'requestReservation',
      component: requestReservation
    },
    {
      path: '/registrationphotography',
      name: 'registrationphotography',
      component: registrationphotography
    },
    {
      path: '/registrationArticle',
      name: 'registrationArticle',
      component: registrationArticle
    },
    {
      path: '/registrationAnnouncer',
      name: 'registrationAnnouncer',
      component: registrationAnnouncer
    },
    {
      path: '/joinourteam',
      name: 'joinourteam',
      component: joinourteam
    },
    {
      path: '/annoncing',
      name: 'annoncing',
      component: annoncing
    },
    {
      path: '/photographypage',
      name: 'photographypage',
      component: photographypage
    },
    {
      path: '/articlepage',
      name: 'articlepage',
      component: articlepage
    },
    {
      path: '/announcingpage',
      name: 'announcingpage',
      component: announcingpage
    },
    {
      path: '/adminpage',
      name: 'adminpage',
      component: adminpage
    },
    
    {
      path: '/joinLogin',
      name: 'joinLogin',
      component: joinLogin
    },
    {
      path: '/joinRegistration',
      name: 'joinRegistration',
      component: joinRegistration
    },
    {
      path: '/loginPhotography',
      name: 'loginPhotography',
      component: loginPhotography
    },
    {
      path: '/loginannouncer',
      name: 'loginannouncer',
      component: loginannouncer
    },
    {
      path: '/loginarticle',
      name: 'loginarticle',
      component: loginarticle
    },
    
    {
      path: '/imageUpload',
      name: 'imageUpload',
      component: imageUpload
    },
    {
      path: '/team',
      name: 'team',
      component: team
    },
    {
      path: '/announceradmin',
      name: 'announceradmin',
      component: announceradmin
    },
    
    {
      path: '/articleadmin',
      name: 'articleadmin',
      component: articleadmin
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
  
 
  ]
})

export default router
