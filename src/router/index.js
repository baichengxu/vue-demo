import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import HelloWorld1 from '@/components/HelloWorld1';
import HelloWorld2 from '@/components/HelloWorld2';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
      children: [
        {
          path: 'a',
          name: 'Hello1',
          component: HelloWorld1,
          children: [
            {
              path: 'b',
              name: 'Hello2',
              component: HelloWorld1,
            },
            {
              path: 'c',
              name: 'Hello3',
              component: HelloWorld2,
            },
          ],
        },
      ],
    },
    {
      path: '/view',
      name: 'Hello',
      component: HelloWorld,
      children: [
        {
          path: 'a',
          name: 'Hello1',
          component: HelloWorld1,
          children: [
            {
              path: 'b',
              name: 'Hello2',
              component: HelloWorld1,
            },
            {
              path: 'c',
              name: 'Hello3',
              component: HelloWorld2,
            },
          ],
        },
      ],
    },
  ],
});
