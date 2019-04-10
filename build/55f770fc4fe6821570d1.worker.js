!function(e){var t={};function r(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(i,s,function(t){return e[t]}.bind(null,s));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t){var r=function(){function e(e){this.body=null,this.quad=null,this.NW=null,this.NE=null,this.SW=null,this.SE=null,this.theta=.5,null!=e&&(this.quad=e)}var t=e.prototype;return t.insert=function(t){null!=this.body?this._isExternal()?(this.NW=new e(this.quad.NW()),this.NE=new e(this.quad.NE()),this.SW=new e(this.quad.SW()),this.SE=new e(this.quad.SE()),this._putBody(this.body),this._putBody(t),this.body=this.body.add(t)):(this.body=this.body.add(t),this._putBody(t)):this.body=t},t._putBody=function(e){e.in(this.quad.NW())?this.NW.insert(e):e.in(this.quad.NE())?this.NE.insert(e):e.in(this.quad.SW())?this.SW.insert(e):e.in(this.quad.SE())&&this.SE.insert(e)},t._isExternal=function(){return null==this.NW&&null==this.NE&&null==this.SW&&null==this.SE},t.updateForce=function(e){null!=this.body&&e!==this.body&&(this._isExternal()?e.addForce(this.body):this.quad.getLength()/this.body.distanceTo(e)<this.theta?e.addForce(this.body):(this.NW.updateForce(e),this.NE.updateForce(e),this.SW.updateForce(e),this.SE.updateForce(e)))},e}();e.exports=r},function(e,t){var r=function(){function e(e){this.xmid=e.xmid,this.ymid=e.ymid,this.length=e.length,this.massCenter=e.massCenter,this.mass=e.mass}var t=e.prototype;return t.getLength=function(){return this.length},t.contains=function(e,t){var r=this.length/2;return e<=this.xmid+r&&e>=this.xmid-r&&t<=this.ymid+r&&t>=this.ymid-r},t.NW=function(){var t=new e({xmid:this.xmid-this.length/4,ymid:this.ymid+this.length/4,length:this.length/2});return t},t.NE=function(){var t=new e({xmid:this.xmid+this.length/4,ymid:this.ymid+this.length/4,length:this.length/2});return t},t.SW=function(){var t=new e({xmid:this.xmid-this.length/4,ymid:this.ymid-this.length/4,length:this.length/2});return t},t.SE=function(){var t=new e({xmid:this.xmid+this.length/4,ymid:this.ymid-this.length/4,length:this.length/2});return t},e}();e.exports=r},function(e,t){var r=function(){function e(e){this.id=e.id,this.rx=e.rx,this.ry=e.ry,this.fx=0,this.fy=0,this.mass=e.mass,this.degree=e.degree,this.G=e.G}var t=e.prototype;return t.distanceTo=function(e){var t=this.rx-e.rx,r=this.ry-e.ry;return Math.hypot(t,r)},t.setPos=function(e,t){this.rx=e,this.ry=t},t.resetForce=function(){this.fx=0,this.fy=0},t.addForce=function(e){var t=e.rx-this.rx,r=e.ry-this.ry,i=Math.hypot(t,r);i=i<1e-4?1e-4:i;var s=this.G*(this.degree+1)*(e.degree+1)/i;this.fx+=s*t/i,this.fy+=s*r/i},t.in=function(e){return e.contains(this.rx,this.ry)},t.add=function(t){var r=this.mass+t.mass;return new e({rx:(this.rx*this.mass+t.rx*t.mass)/r,ry:(this.ry*this.mass+t.ry*t.mass)/r,mass:r,degree:this.degree+t.degree})},e}();e.exports=r},function(e,t,r){var i=r(2),s=r(1),n=r(0),o=function(){function e(){}var t=e.prototype;return t.updateNodesByForces=function(e){var t=e.nodes,r=e.edges,i=e.maxIteration,s=e.barnesHut,n=e.prune;r=r.filter(function(e){return e.source!==e.target});for(var o=t.length,a=r.length,d=[],u={},h={},l=[],c=0;c<o;c+=1)u[t[c].id]=c,d[c]=0,(void 0===t[c].x||isNaN(t[c].x))&&(t[c].x=1e3*Math.random()),(void 0===t[c].y||isNaN(t[c].y))&&(t[c].y=1e3*Math.random()),l.push({x:t[c].x,y:t[c].y});for(var p=0;p<a;p+=1){for(var y=void 0,f=void 0,g=0,x=0,v=0;v<o;v+=1)t[v].id===r[p].source?(y=t[v],g=v):t[v].id===r[p].target&&(f=t[v],x=v),h[p]={sourceIdx:g,targetIdx:x};d[u[y.id]]+=1,d[u[f.id]]+=1}var m=i,b={data:e,size:o,esize:a,idMap:u,degrees:d,iteration:m,prune:n,barnesHut:s,edgeEndsIdMap:h};if(t=this.iterate(b),n){for(var F=0;F<a;F+=1)d[h[F].sourceIdx]<=1?(t[h[F].sourceIdx].x=t[h[F].targetIdx].x,t[h[F].sourceIdx].y=t[h[F].targetIdx].y):d[h[F].targetIdx]<=1&&(t[h[F].targetIdx].x=t[h[F].sourceIdx].x,t[h[F].targetIdx].y=t[h[F].sourceIdx].y);var M={data:e,size:o,esize:a,idMap:u,degrees:d,iteration:m=100,prune:n=!1,barnesHut:s=!1,edgeEndsIdMap:h};t=this.iterate(M)}return t},t.iterate=function(e){for(var t=e.data,r=e.size,s=e.esize,n=e.idMap,o=e.degrees,a=e.iteration,d=e.prune,u=e.barnesHut,h=e.edgeEndsIdMap,l=t.nodes,c=t.ks,p=t.kr,y=t.kg,f=t.mode,g=t.prevOverlapping,x=t.dissuadeHubs,v=t.ksmax,m=t.tao,b=t.center,F=t.widths,M=0,I=a,E=[],S=[],N=[],w=0;w<r;w+=1)if(E[2*w]=0,E[2*w+1]=0,u){var k={id:w,rx:l[w].x,ry:l[w].y,mass:1,G:p,degree:o[w]};N[w]=new i(k),k=null}do{for(var W=0;W<r;W+=1)S[2*W]=E[2*W],S[2*W+1]=E[2*W+1],E[2*W]=0,E[2*W+1]=0;var z={nodes:l,esize:s,prevOverlapping:g,dissuadeHubs:x,mode:f,iter:I,prevoIter:50,Forces:E,widths:F,idMap:n,degrees:o,prune:d,edgeEndsIdMap:h};if(E=this.getAttrForces(z),u&&(g&&I>50||!g)){var O={nodes:l,size:r,Forces:E,kg:y,center:b,bodies:N,degrees:o,prune:d};E=this.getOptRepGraForces(O)}else{var _={nodes:l,size:r,prevOverlapping:g,iter:I,prevoIter:50,Forces:E,kr:p,krPrime:100,kg:y,center:b,widths:F,degrees:o,prune:d};E=this.getRepGraForces(_)}var q={size:r,nodes:l,Forces:E,preForces:S,SG:M,ks:c,ksmax:v,tao:m,degrees:o,prune:d},P=this.updatePos(q);l=P[0],M=P[1],I-=1}while(I>0);return l},t.getAttrForces=function(e){for(var t=e.nodes,r=e.esize,i=e.prevOverlapping,s=e.dissuadeHubs,n=e.mode,o=e.iter,a=e.prevoIter,d=e.Forces,u=e.widths,h=e.idMap,l=e.degrees,c=e.prune,p=e.edgeEndsIdMap,y=0;y<r;y+=1){var f=t[p[y].sourceIdx],g=p[y].sourceIdx,x=t[p[y].targetIdx],v=p[y].targetIdx;if(!c||!(l[g]<=1||l[v]<=1)){var m=[x.x-f.x,x.y-f.y],b=Math.hypot(m[0],m[1]);b=b<1e-4?1e-4:b,m[0]=m[0]/b,m[1]=m[1]/b,i&&o<a&&(b=b-u[g]-u[v]);var F=b,M=F;"linlog"===n&&(M=F=Math.log(1+b)),s&&(F=b/l[g],M=b/l[v]),i&&o<a&&b<=0?(F=0,M=0):i&&o<a&&b>0&&(F=b,M=b),d[2*h[f.id]]+=F*m[0],d[2*h[x.id]]-=M*m[0],d[2*h[f.id]+1]+=F*m[1],d[2*h[x.id]+1]-=M*m[1],m=null}}return d},t.getRepGraForces=function(e){for(var t=e.nodes,r=e.size,i=e.prevOverlapping,s=e.iter,n=e.prevoIter,o=e.Forces,a=e.kr,d=e.krPrime,u=e.kg,h=e.center,l=e.widths,c=e.degrees,p=e.prune,y=0;y<r;y+=1){for(var f=y+1;f<r;f+=1)if(!p||!(c[y]<=1||c[f]<=1)){var g=[t[f].x-t[y].x,t[f].y-t[y].y],x=Math.hypot(g[0],g[1]);x=x<1e-4?1e-4:x,g[0]=g[0]/x,g[1]=g[1]/x,i&&s<n&&(x=x-l[y]-l[f]);var v=a*(c[y]+1)*(c[f]+1)/x;i&&s<n&&x<0?v=d*(c[y]+1)*(c[f]+1):i&&s<n&&0===x?v=0:i&&s<n&&x>0&&(v=a*(c[y]+1)*(c[f]+1)/x),o[2*y]-=v*g[0],o[2*f]+=v*g[0],o[2*y+1]-=v*g[1],o[2*f+1]+=v*g[1],g=null}var m=[t[y].x-h.x,t[y].y-h.y],b=Math.hypot(m[0],m[1]);m[0]=m[0]/b,m[1]=m[1]/b;var F=u*(c[y]+1);o[2*y]-=F*m[0],o[2*y+1]-=F*m[1],m=null}return o},t.getOptRepGraForces=function(e){for(var t=e.nodes,r=e.size,i=e.Forces,o=e.kg,a=e.center,d=e.bodies,u=e.degrees,h=e.prune,l=9e10,c=-9e10,p=9e10,y=-9e10,f=0;f<r;f+=1)h&&u[f]<=1||(d[f].setPos(t[f].x,t[f].y),t[f].x>=c&&(c=t[f].x),t[f].x<=l&&(l=t[f].x),t[f].y>=y&&(y=t[f].y),t[f].y<=p&&(p=t[f].y));for(var g=Math.max(c-l,y-p),x={xmid:(c+l)/2,ymid:(y+p)/2,length:g,massCenter:a,mass:r},v=new s(x),m=new n(v),b=0;b<r;b+=1)h&&u[b]<=1||d[b].in(v)&&m.insert(d[b]);for(var F=0;F<r;F+=1)if(!(h&&u[F]<=1)){d[F].resetForce(),m.updateForce(d[F]),i[2*F]-=d[F].fx,i[2*F+1]-=d[F].fy;var M=[t[F].x-a.x,t[F].y-a.y],I=Math.hypot(M[0],M[1]);I=I<1e-4?1e-4:I,M[0]=M[0]/I,M[1]=M[1]/I;var E=o*(u[F]+1);i[2*F]-=E*M[0],i[2*F+1]-=E*M[1],I=null,E=null,M=null}return x=null,v=null,m=null,g=null,i},t.updatePos=function(e){for(var t=e.size,r=e.nodes,i=e.Forces,s=e.preForces,n=e.SG,o=e.ks,a=e.ksmax,d=e.tao,u=e.degrees,h=e.prune,l=[],c=[],p=0,y=0,f=0;f<t;f+=1)if(!(h&&u[f]<=1)){var g=[i[2*f]-s[2*f],i[2*f+1]-s[2*f+1]],x=Math.hypot(g[0],g[1]),v=[i[2*f]+s[2*f],i[2*f+1]+s[2*f+1]],m=Math.hypot(v[0],v[1]);l[f]=x,c[f]=m/2,p+=(u[f]+1)*l[f],y+=(u[f]+1)*c[f]}var b=n;n=d*y/p,0!==b&&(n=n>1.5*b?1.5*b:n);for(var F=0;F<t;F+=1)if(!(h&&u[F]<=1)){var M=o*n/(1+n*Math.sqrt(l[F])),I=Math.hypot(i[2*F],i[2*F+1]),E=a/(I=I<1e-4?1e-4:I),S=(M=M>E?E:M)*i[2*F],N=M*i[2*F+1];r[F].x+=S,r[F].y+=N}return l=null,c=null,b=null,[r,n]},e}();e.exports=o},function(e,t,r){const i=r(3);onmessage=function(e){const t=(new i).updateNodesByForces(e.data);self.postMessage(t)}}]);
//# sourceMappingURL=55f770fc4fe6821570d1.worker.js.map