(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0], [,,,, function(e, t, n) {
  e.exports=n(12);
},,,,, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {
    'use strict'; n.r(t); const a=n(0); const c=n.n(a); const o=n(2); const r=n.n(o); const i=(n(9), n(10), n(3)); const s=(n(11), function(e, t, n) {
      return 1+.5*Math.ceil(5*e);
    }); const l=function(e) {
      e.key; const t=e.id; const n=e.distance; const o=e.startTime; const r=e.duration; const l=(s(n, o, r), Object(a.useState)(!1)); const m=Object(i.a)(l, 2); const d=m[0]; const u=m[1]; return c.a.createElement('div', {className: 'Ride-box'}, c.a.createElement('div', {className: 'Ride-row'}, 'distance in miles: ', n), c.a.createElement('div', {className: 'Ride-row'}, 'startTime: ', o), c.a.createElement('div', {className: 'Ride-row'}, 'duration in seconds: ', n), c.a.createElement('div', {className: 'Ride-row'}, 'ride ID in ', t), c.a.createElement('div', {className: 'Ride-row'}, d?'DEJA CLIQUER':'PAS CLIQUER'), c.a.createElement('button', {onClick: function() {
        window.confirm('BLALBLALBLA'), u(!0);
      }}, ' "CLICK ICI" '));
    }; const m=function() {
      let e=[]; return window.fetch('http://localhost:8081/taxi').then((function(t) {
        return e=t;
      })).catch((function(e) {
        return console.log(e);
      })), c.a.createElement('div', {className: 'App'}, c.a.createElement('header', {className: 'App-header'}, 'WELCOME TO THIS FAKE TAXI APP !'), c.a.createElement('body', {className: 'App-body'}, [{}, {}, {}].map((function(e, t) {
        return c.a.createElement(l, {key: t});
      })), e.map((function(e, t) {
        return c.a.createElement(l, {key: t});
      }))));
    }; Boolean('localhost'===window.location.hostname||'[::1]'===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)); r.a.render(c.a.createElement(c.a.StrictMode, null, c.a.createElement(m, null)), document.getElementById('root')), 'serviceWorker'in navigator&&navigator.serviceWorker.ready.then((function(e) {
      e.unregister();
    })).catch((function(e) {
      console.error(e.message);
    }));
  }], [[4, 1, 2]]]);
// # sourceMappingURL=main.eb1c5316.chunk.js.map
