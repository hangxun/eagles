!function(c){"use strict";var h="ht",v=c[h],b=v.Default,k=Math,M=k.PI,t=2*M,O=k.sin,I=k.cos,P=k.atan2,Q=k.sqrt,S=k.max,w=k.floor,f=(k.round,k.ceil),x=k.abs,A=v.Shape,l=v.Edge,H=v.List,m=v.Style,L=v.graph,g=b.getInternal(),B=g.ui(),Z=null,u="__segmentLengths",$="__lineTotalLength",a="__linePoints",q="__distance0",V="flow.count",_="flow.step",j="flow.element.max",E="flow.element.count",U="flow.element.min",o="flow.element.space",T="flow.element.autorotate",n="flow.element.background",C="flow.element.shadow.max",W="flow.element.shadow.min",G="flow.element.shadow.begincolor",z="flow.element.shadow.endcolor",s="flow.element.shadow.visible",r="flow.element.image",R="flow",p="prototype",N=L.GraphView[p],K=v.Data[p],d=B.DataUI[p],F=B.ShapeUI[p],D=B.EdgeUI[p],i=v.DataModel[p],e=F._80o,y=D._80o,J=i.prepareRemove,X=D._79o,Y=F._79o,Co=N.setDataModel,ib=function(F){return document.createElement(F)};N.calculatePointLength=function(L,q,k){var F=this,J=F.getDataUI(L);k==Z&&(k=.1);var z=Jl(J),Q=[];if(z){for(var G=z.length,P=0;G>P;P++){var H=z[P];H._as&&(H=H._as);for(var B=H[0],K=1;K<H.length;K++)Q.push([B,H[K]]),B=H[K]}for(var j=[],P=0;P<Q.length;P++){var O=um(Q[P][0],Q[P][1],q);j.push(O)}var D=j.slice(0);D.sort(function(S,C){return S.z>C.z?1:S.z<C.z?-1:0});var f=D[0];if(f.z<k){for(var $=j.indexOf(f),n=0,P=0;$>=P;P++)n+=$>P?b.getDistance(Q[P][0],Q[P][1]):b.getDistance(Q[P][0],f);return n}}},b.calculatePointLength=function(V,C,R,y){y==Z&&(y=.1);var x=Jl(Z,V,C),C=[];if(x){for(var e=x.length,B=0;e>B;B++){var D=x[B];D._as&&(D=D._as);for(var A=D[0],d=1;d<D.length;d++)C.push([A,D[d]]),A=D[d]}for(var p=[],B=0;B<C.length;B++){var j=um(C[B][0],C[B][1],R);p.push(j)}var t=p.slice(0);t.sort(function(m,x){return m.z>x.z?1:m.z<x.z?-1:0});var s=t[0];if(s.z<y){for(var $=p.indexOf(s),n=0,B=0;$>=B;B++)n+=$>B?b.getDistance(C[B][0],C[B][1]):b.getDistance(C[B][0],s);return n}}},N.calculateClosestPoint=function(T,x){var l=this,i=l.getDataUI(T),b=Jl(i),q=[];if(b){for(var d=b.length,G=0;d>G;G++){var S=b[G];S._as&&(S=S._as);for(var J=S[0],Q=1;Q<S.length;Q++)q.push([J,S[Q]]),J=S[Q]}for(var t=[],G=0;G<q.length;G++){var $=um(q[G][0],q[G][1],x);t.push($)}return t.sort(function(N,j){return N.z>j.z?1:N.z<j.z?-1:0}),t[0]}},b.calculateClosestPoint=function(t,S,K){var H=Jl(Z,t,S),S=[];if(H){for(var R=H.length,z=0;R>z;z++){var y=H[z];y._as&&(y=y._as);for(var J=y[0],o=1;o<y.length;o++)S.push([J,y[o]]),J=y[o]}for(var D=[],z=0;z<S.length;z++){var r=um(S[z][0],S[z][1],K);D.push(r)}return D.sort(function(o,d){return o.z>d.z?1:o.z<d.z?-1:0}),D[0]}},N.getPercentAngle=function(F,o){var _=this,d=_.getDataUI(F),i=F.getRotation?F.getRotation():0,w=Jl(d);if(w)if(0===o){var K=w[0][0],J=w[0][1];i+=P(J.y-K.y,J.x-K.x)}else if(100===o){w=w[w.length-1];var K=w[w.length-2],J=w[w.length-1];i+=P(J.y-K.y,J.x-K.x)}else{for(var q=0,g=[],s=w.length,M=0;s>M;M++){var y=w[M],B=Rj(y);q+=B,g.push(B)}for(var v=q*o/100,I=jc(v,g),n=0,Y=0;I>Y;Y++)n+=g[Y];v-=n;for(var O=Tg(w[I],v),l=w[I],b=0,t=0,h=0;h<l.length-1;h++){var S=l[h],T=l[h+1],V=T.x-S.x,W=T.y-S.y,u=Q(V*V+W*W);if(b+=u,b>v){t=h;break}}var N=l[t];i+=P(O.y-N.y,O.x-N.x)}return i},b.getPercentAngle=function(r,W,q){var U=0,b=Jl(Z,r,W);if(b)if(0===q){var e=b[0][0],w=b[0][1];U+=P(w.y-e.y,w.x-e.x)}else if(100===q){b=b[b.length-1];var e=b[b.length-2],w=b[b.length-1];U+=P(w.y-e.y,w.x-e.x)}else{for(var v=0,j=[],o=b.length,B=0;o>B;B++){var t=b[B],F=Rj(t);v+=F,j.push(F)}for(var _=v*q/100,g=jc(_,j),S=0,h=0;g>h;h++)S+=j[h];_-=S;for(var N=Tg(b[g],_),x=b[g],$=0,m=0,O=0;O<x.length-1;O++){var X=x[O],z=x[O+1],y=z.x-X.x,i=z.y-X.y,C=Q(y*y+i*i);if($+=C,$>_){m=O;break}}var I=x[m];U+=P(N.y-I.y,N.x-I.x)}return U},N.calculateLength=function(A){var O=this,q=O.getDataUI(A),R=Jl(q),Q=0;if(R)if(Array.isArray(R[0]))for(var G=R.length,U=0;G>U;U++){var m=R[U],z=Rj(m);Q+=z}else Q=Rj(R);return Q},b.calculateLength=function(j,u){var j=Jl(Z,j,u),b=0;if(j)if(Array.isArray(j[0]))for(var F=j.length,z=0;F>z;z++){var o=j[z],l=Rj(o);b+=l}else b=Rj(j);return b};var um=b.calculateClosestPointOnLine=function(z,X,Q){var G=z.x,m=z.y,U=X.x,p=X.y,i=Q.x,V=Q.y,c={},v=U-G,D=p-m,B=Math.sqrt(v*v+D*D),C=v/B,L=D/B,N=(-G+i)*C+(-m+V)*L;return c.x=G+N*C,c.y=m+N*L,oi(c,z,X)||(c.x=Math.abs(c.x-z.x)<Math.abs(c.x-X.x)?z.x:X.x,c.y=Math.abs(c.y-z.y)<Math.abs(c.y-X.y)?z.y:X.y),v=i-c.x,D=V-c.y,c.z=Math.sqrt(v*v+D*D),c},oi=function(a,E,t){return a.x>=Math.min(E.x,t.x)&&a.x<=Math.max(E.x,t.x)&&a.y>=Math.min(E.y,t.y)&&a.y<=Math.max(E.y,t.y)},Rj=function(N){for(var e=0,y=N.length-1,U=0;y>U;U++){var p=N[U],s=N[U+1],M=s.x-p.x,x=s.y-p.y,R=Q(M*M+x*x);e+=R}return e},Tg=function(w,p){for(var U=0,J=0,i=0,H=w.length-1,u=0;H>u;u++){var q=w[u],A=w[u+1],g=A.x-q.x,a=A.y-q.y;if(i=Q(g*g+a*a),U+=i,U>p){U-=i,J=u;break}}var v=w[J],E=w[J+1],e=P(E.y-v.y,E.x-v.x),R=p-U,a=O(e)*R,g=I(e)*R;return{x:v.x+g,y:v.y+a}},mq=function(k,m,J,l){var B=I(l),n=O(l),u=B*m-n*J,A=n*m+B*J;return k?{x:k.x+u,y:k.y+A}:{x:u,y:A}},Gq=function(y,t){y[u]=y[$]=y[a]=t[q]=Z},go=function(l,R,k,h,j,$){var E,C,a,b,q,u,Q,P,K,T,N,y=[];if(x(h)>t&&(h=t),q=f(x(h)/(M/4)),E=h/q,C=-E,a=-k,q>0){u=l+I(k)*j,Q=R+O(-k)*$,y.push({x:u,y:Q});for(var v=0;q>v;v++)a+=C,b=a-C/2,P=l+I(a)*j,K=R+O(a)*$,T=l+I(b)*(j/I(C/2)),N=R+O(b)*($/I(C/2)),y.push({x:T,y:N}),y.push({x:P,y:K})}return y},Jl=function(X,s,_){if(s==Z){var e=X._data;if(e instanceof A){if(s=e.getPoints(),_=e.getSegments(),(!_||0===_.size())&&s){_=new v.List([1]);for(var E=1;E<s.size();E++)_.add(2)}}else if(e instanceof l){var i=X._78o;if(i){var q=i.type,J=i.points,n=i.segments,M=i._4O;if(!q||J){var Y=i.sourcePoint,b=Y.x,d=Y.y,f=i.targetPoint,L=f.x,o=f.y;if(q)n?(s=new H({x:b,y:d}),s.addAll(J),s.add({x:L,y:o}),_=new H(n._as)):(s=new H({x:b,y:d}),_=new H([1]),J.each(function(g){s.add(g),_.add(2)}),s.add({x:L,y:o}),_.add(2));else if(i.looped){s=new H(go(b,d,0,t,i.radius,i.radius)),_=new H([1]);for(var E=0;E<(s.size()-1)/2;E++)_.add(3)}else s=new H,i.center?(s.add({x:i.c1.x,y:i.c1.y}),s.add({x:b,y:d}),s.add({x:L,y:o}),s.add({x:i.c2.x,y:i.c2.y}),_=new H([1,2,2,2])):(s.add({x:b,y:d}),s.add({x:L,y:o}),_=new H([1,2]))}else if(M)if(s=new H(M.points._as),M.segments)_=new H(M.segments._as);else{_=new H([1]);for(var E=1;E<M.points.size();E++)_.add(2)}}}}if(s){if(Array.isArray(s)&&(s=new H(s)),"number"==typeof s.get(0)){for(var C=new v.List,E=0;E<s.size();E+=2)C.add({x:s.get(E),y:s.get(E+1)});s=C}if(!_){_=[];for(var E=0;E<s.size();E++)0===E?_.push(1):_.push(2)}Array.isArray(_)&&(_=new H(_));for(var y=g.toPointsArray(s._as,_._as,50),k=y.length,K=[],E=0;k>E;E++){var T=y[E];T.length>1&&K.push(T)}return K}},cf=function(c){var Y=c._data,F=Jl(c);if(F){Y.s("flow.reverse")&&(F.reverse(),F.forEach(function(O){O.reverse()}));for(var z=0,v=[],i=F.length,E=0;i>E;E++){var Z=F[E],O=Rj(Z);z+=O,v.push(O)}if(Y[u]=v,Y[$]=z,Y[a]=F,Y instanceof l){var U=b.unionPoint(F),w=U.x+U.width/2,R=U.y+U.height/2;Y.$10e={x:w,y:R}}rk(c,!0)}},rk=(b.getPercentPositionOnPoints=function(W,V,D){if(W){var X=Jl(Z,W,V);if(X){var e;if(0===D)e=X[0][0];else if(100===D)X=X[X.length-1],e=X[X.length-1];else{for(var x=0,U=[],f=X.length,I=0;f>I;I++){var S=X[I],N=Rj(S);x+=N,U.push(N)}for(var i=x*D/100,n=jc(i,U),F=0,v=0;n>v;v++)F+=U[v];i-=F,e=Tg(X[n],i)}return e}}},N.getPercentPosition=function(U,D){var P=this,v=P.getDataUI(U),T=Jl(v);if(T){var V;if(0===D)V=T[0][0];else if(100===D)T=T[T.length-1],V=T[T.length-1];else{for(var x=0,X=[],L=T.length,Y=0;L>Y;Y++){var I=T[Y],a=Rj(I);x+=a,X.push(a)}for(var $=x*D/100,f=jc($,X),w=0,Z=0;f>Z;Z++)w+=X[Z];$-=w,V=Tg(T[f],$)}return V}},function(l,F){var M=l._data,d=M[$],c=M.s(V),I=M.s(_),f=0,B=M[u],G=M.s(j),o=M.s(U),x=M.s(E),X=(G-o)/(x-1),n=[];if(B){if(1===x)n.push(G);else if(2===x)n.push(G),n.push(o);else{if(!(x>2))return;n.push(G);for(var S=x-2;S>0;S--)n.push(o+X*S);n.push(o)}var N=0,L=0;n.forEach(function($){x-1>N&&(L+=M.getFlowElementSpace($)),N++}),L+=(G+o)/2,f=(d-c*L+L)/c;var H=l[q];for(null==H&&(H=0),F||(H+=I);H>d+L;){var J=l._overCount;J?J++:J=1,J>=c&&(J=null),l._overCount=J,M.s("flow.autoreverse")?J?H-=f+L:(H=0,M.s("flow.reverse",!M.s("flow.reverse"))):H-=f+L}l[q]=H}}),Yr=function(z){var T=z.data,W=this.dm();if(T&&"add"===z.kind){var E=W.$3e;E&&T.s(R)&&E.indexOf(T)<0&&E.push(T)}"clear"===z.kind&&(W.$3e=[])},rn=function(G){var P=G.property,y=G.data,R=G.newValue,f=this.dm().$3e;if(f&&"s:flow"===P)if(R)f.indexOf(y)<0&&f.push(y);else for(var Y=f.length,L=0;Y>L;L++)if(f[L]===y){f.splice(L,1);break}},jc=jc=function(S,_){for(var i=0,x=_.length,r=0;x>r;r++){var m=_[r];if(i+=m,i>S)return r}return Math.min(r,x-1)},wi=function(N){var h=this,K=h._data,D=K[$],F=K[u],f=K[a],w=K.s(V),k=0,z=h[q],x=K.s(j),J=K.s(U),g=K.s(E),B=K.s(W),n=K.s(C),e=K.s(T),b=(n-B)/(g-1),s=(x-J)/(g-1),O=K.getRotation?K.getRotation():0,M=K.getPosition?K.p():K.$10e,r=[],m=[];if(z!=Z){if(1===g)r.push(x);else if(2===g)r.push(x),r.push(J);else{if(!(g>2))return;r.push(x);for(var S=g-2;S>0;S--)r.push(J+s*S);r.push(J)}if(1===g)m.push(n);else if(2===g)m.push(n),m.push(B);else{if(!(g>2))return;m.push(n);for(var S=g-2;S>0;S--)m.push(B+b*S);m.push(B)}var l=0,o=0;r.forEach(function(S){g-1>l&&(o+=K.getFlowElementSpace(S)),l++}),o+=(x+J)/2,k=(D-w*o+o)/w,N.save();for(var S=0;w>S;S++){var v=z,d=0,G=h._overCount,H=0;K.s("flow.autoreverse")&&G&&G>w-(S+1)||(v-=S*(k+o),l=0,r.forEach(function(S){var x=v-d;if(x>=0&&D>x){var Z=!0,c=jc(x,F);H=0;for(var E=0;c>E;E++)H+=F[E];if(x-=H,Z){var L=Tg(f[c],x),_=O;if(e){for(var u=f[c],j=0,X=0,n=0;n<u.length-1;n++){var R=u[n],$=u[n+1],w=$.x-R.x,i=$.y-R.y,V=Q(w*w+i*i);if(j+=V,j>x){X=n;break}}var A=u[X];_+=P(L.y-A.y,L.x-A.x)}O&&(L=mq(M,L.x-M.x,L.y-M.y,O)),h.$5e(N,L,S,m[l],_)}}d+=K.getFlowElementSpace(r[l]),l++}))}N.restore()}},fc=function(){var A=this,_=A._data,w=_.s(j),i=!1,Q=Z;if(A._6I||(i=!0),Q=_ instanceof l?X.call(A):Y.call(A),_.s(R)&&i){var t=_.s(C),r=_.s(s);r&&t>w&&(w=t),w>0&&b.grow(Q,f(w/2)),cf(A)}return!_.s(R)&&i&&Gq(_,A),Q};K.getFlowElementSpace=function(){return this.s(o)},F._79o=fc,D._79o=fc,m[j]==Z&&(m[j]=7),m[U]==Z&&(m[U]=0),m[V]==Z&&(m[V]=1),m[_]==Z&&(m[_]=3),m[E]==Z&&(m[E]=10),m[o]==Z&&(m[o]=3.5),m[T]==Z&&(m[T]=!1),m[n]==Z&&(m[n]="rgba(255, 255, 114, 0.4)"),m[G]==Z&&(m[G]="rgba(255, 255, 0, 0.3)"),m[z]==Z&&(m[z]="rgba(255, 255, 0, 0)"),m[s]==Z&&(m[s]=1),m[C]==Z&&(m[C]=22),m[W]==Z&&(m[W]=4),i.prepareRemove=function(K){J.call(this,K);var U=K._dataModel,b=U.$3e;if(b)for(var M=b.length,j=0;M>j;j++)if(b[j]===K){b.splice(j,1);break}},N.setDataModel=function(q){var P=this,_=P._dataModel;if(_!==q){_&&(_.umm(Yr,P),_.umd(rn,P),_.$3e=[]),q.mm(Yr,P),q.md(rn,P);var z=q.$3e=[];q.each(function(r){r.s(R)&&z.indexOf(r)<0&&z.push(r)}),Co.call(P,q)}},N.setFlowInterval=function(I){var F=this,H=F.$11e;F.$11e=I,F.fp("flowInterval",H,I),F.$7e!=Z&&(clearInterval(F.$7e),delete F.$7e,F.enableFlow(I))},N.getFlowInterval=function(){return this.$11e},N.$9e=function(){var R,o,V,e=this,z=e.tx(),B=e.ty(),q=e.getZoom(),n=e.getWidth(),a=e.getHeight(),j={x:-z/q,y:-B/q,width:n/q,height:a/q},I=e.dm().$3e,G=e._56I,u=new H;if(I.forEach(function(s){G[s.getId()]&&(R=e.getDataUI(s),R&&(V=R._79o(),V&&u.add(V)))}),0!==u.size()&&(u.each(function(G){b.intersectsRect(j,G)&&(o=b.unionRect(o,G))}),o&&(o&&(b.grow(o,S(1,1/q)),o.x=w(o.x*q)/q,o.y=w(o.y*q)/q,o.width=f(o.width*q)/q,o.height=f(o.height*q)/q,o=b.intersection(j,o)),o))){var Z=e._canvas.getContext("2d");Z.save(),Z.lineCap=b.lineCap,Z.lineJoin=b.lineJoin,g.translateAndScale(Z,z,B,q),Z.beginPath(),Z.rect(o.x,o.y,o.width,o.height),Z.clip(),Z.clearRect(o.x,o.y,o.width,o.height),e.$6e(Z,o),Z.restore()}},N.$6e=function(L,q){var m,w,t=this;t._93db(L),t.each(function(d){t._56I[d._id]&&(m=t.getDataUI(d),m&&(w=m._79o(),(!q||b.intersectsRect(q,w))&&m._42(L)))}),t._92db(L)},N.enableFlow=function(X){var k=this,f=k.dm(),p=f.$3e;k.$7e==Z&&(p.forEach(function(i){var W=k.getDataUI(i);cf(W)}),k.$7e=setInterval(function(){f.$3e.forEach(function($){rk(k.getDataUI($))}),k.$9e()},X||k.$11e||50))},N.disableFlow=function(){var p=this;clearInterval(p.$7e),delete p.$7e;var T=p.dm().$3e;T&&p.$9e()},d.$5e=function(f,k,p,B,E){var H=this,S=H._data,C=H.gv,K=S.s(n),T=S.s(G),O=S.s(z),h=S.s(s),L=C.$8e,o=S.s(r);if(L==Z&&(L=C.$8e={}),f.beginPath(),o!=Z){var A=b.getImage(o),i=p/2;f.translate(k.x,k.y),f.rotate(E),f.translate(-k.x,-k.y),b.drawImage(f,A,k.x-i,k.y-i,p,p,S),f.translate(k.x,k.y),f.rotate(-E),f.translate(-k.x,-k.y)}else f.fillStyle=K,f.arc(k.x,k.y,p/2,0,t,!0),f.fill();if(h){var V=22,y=V+"_"+T+"_"+O,x=L[y];if(x==Z){var c=ib("canvas");g.setCanvas(c,V,V);var Q=c.getContext("2d"),d=V/2,a=d,I=d;g.translateAndScale(Q,0,0,1),Q.beginPath();var W=Q.createRadialGradient(a,I,0,a,a,d);W.addColorStop(0,T),W.addColorStop(1,O),Q.fillStyle=W,Q.arc(a,I,d,0,t,!0),Q.fill(),x=L[y]=c}var i=B/2;b.drawImage(f,x,k.x-i,k.y-i,B,B,S)}},D._80o=function(J){y.call(this,J);var U=this,u=U._data,j=U.gv;u.s(R)&&j.$7e!=Z&&wi.call(U,J)},F._80o=function(f){e.call(this,f);var N=this,d=N._data,$=N.gv;d.s(R)&&$.$7e!=Z&&wi.call(N,f)}}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:this,Object);