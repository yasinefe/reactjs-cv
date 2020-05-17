(this["webpackJsonpreactjs-cv"]=this["webpackJsonpreactjs-cv"]||[]).push([[0],{104:function(e,a,t){e.exports=t(132)},132:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(10),o=t.n(r),s=t(16),c=t(68),l=t(179),d=t(176),m=t(60),b=t.n(m),p=t(158),u=t(175),g=t(159),v=t(18),S=t.n(v),f=t(89),h=t(90),E=t(91),y=new(function(){function e(){Object(f.a)(this,e)}return Object(h.a)(e,[{key:"get",value:function(){return JSON.parse(JSON.stringify(E))}},{key:"find",value:function(e){var a=this.get();return e&&(a.profile=this.filterItems(a.profile,e),this.filterCompositeItems(a.technicalSkills,e),this.filterCompositeItems(a.careerHistory,e)),a}},{key:"filterCompositeItems",value:function(e,a){if(e.items){for(var t=0;t<e.items.length;t++)e.items[t]=this.filterItems(e.items[t],a),e.items[t].projectItems&&(e.items[t].projectItems=null);e.items=e.items.filter((function(e){return e.items&&e.items.length>0})),e.expanded=e.items.length>0}return e}},{key:"filterItems",value:function(e,a){return e.items&&(e.items=e.items.filter((function(e){return e.toUpperCase().includes(a.toUpperCase())})).map((function(e){return e.replace(new RegExp(a,"gi"),"<mark>"+a+"</mark>")})),e.expanded=e.items.length>0),e}}]),e}()),x=t(136),C=t(180),P=t(178),k=t(162),D=t(177),T=t(160),J=t(163),A=t(164),I=t(165),M=t(166),w=t(161),O=t(65),L=t(167),j=t(168),B=t(169),N=S()((function(e){return{avatar:{width:e.spacing(14),height:e.spacing(14)},icon:{color:e.palette.getContrastText(e.palette.text.primary)},header:{padding:e.spacing(2),borderRadius:e.spacing(1),backgroundColor:e.palette.primary.main},name:{color:e.palette.getContrastText(e.palette.text.primary)},avatarBox:{padding:e.spacing(1)},search:{backgroundColor:e.palette.getContrastText(e.palette.text.primary),borderRadius:e.spacing(1)},divider:{height:2,backgroundColor:e.palette.getContrastText(e.palette.text.primary)},box:{color:e.palette.getContrastText(e.palette.text.primary),paddingLeft:e.spacing(2)},colorBox:{backgroundColor:e.palette.getContrastText(e.palette.text.primary),borderRadius:8,textAlign:"center"}}}));function R(e){var a=N(),t=e.data,r=i.a.useState(!0),o=Object(s.a)(r,2),d=o[0],m=o[1],b=i.a.useState("email"),p=Object(s.a)(b,2),u=p[0],v=p[1],S=i.a.useState(t.email),f=Object(s.a)(S,2),h=f[0],E=f[1],y=function(e){m(u!==e||!d),v(e)};return Object(n.useEffect)((function(){E(t[u])}),[u]),i.a.createElement(x.a,{className:a.header},i.a.createElement(g.a,{container:!0},i.a.createElement(g.a,{item:!0,xs:6},i.a.createElement(g.a,{container:!0,spacing:1},i.a.createElement(g.a,{item:!0,xs:4},i.a.createElement(l.a,{className:a.avatarBox},i.a.createElement(C.a,{alt:t.name,src:"reactjs-cv/static/images/yasin-efe.jpg",className:a.avatar}))),i.a.createElement(g.a,{item:!0,xs:8,className:a.name},i.a.createElement(c.a,{variant:"h4"},t.name),i.a.createElement(c.a,{variant:"h5"},t.title),i.a.createElement(c.a,{variant:"h6"},t.type)))),i.a.createElement(g.a,{item:!0,xs:6},i.a.createElement(g.a,{container:!0},i.a.createElement(g.a,{item:!0,xs:6},i.a.createElement(P.a,{onClick:function(){return y("email")}},i.a.createElement(l.a,null,i.a.createElement(T.a,{className:a.icon,fontSize:"default"}),i.a.createElement(w.a,{in:"email"===u&&d},i.a.createElement(k.a,{className:a.divider})))),i.a.createElement(P.a,{onClick:function(){return y("mobile")}},i.a.createElement(l.a,null,i.a.createElement(J.a,{className:a.icon,fontSize:"default"}),i.a.createElement(w.a,{in:"mobile"===u&&d},i.a.createElement(k.a,{className:a.divider})))),i.a.createElement(P.a,{onClick:function(){return y("linkedin")}},i.a.createElement(l.a,null,i.a.createElement(A.a,{className:a.icon,fontSize:"default"}),i.a.createElement(w.a,{in:"linkedin"===u&&d},i.a.createElement(k.a,{className:a.divider})))),i.a.createElement(P.a,{onClick:function(){return y("github")}},i.a.createElement(l.a,null,i.a.createElement(I.a,{className:a.icon,fontSize:"default"}),i.a.createElement(w.a,{in:"github"===u&&d},i.a.createElement(k.a,{className:a.divider}))))),i.a.createElement(g.a,{item:!0,xs:6},i.a.createElement(D.a,{size:"small",name:"search",label:"Search a keyword",variant:"filled",fullWidth:!0,className:a.search,onChange:e.onChange})),i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(w.a,{in:d},i.a.createElement(l.a,{className:a.box},h))),i.a.createElement(g.a,{item:!0,xs:6},"\xa0"),i.a.createElement(g.a,{item:!0,xs:6},i.a.createElement(l.a,{className:a.colorBox},i.a.createElement(l.a,{display:"inline"},i.a.createElement(P.a,{onClick:function(){return e.changeTheme(O.a)}},i.a.createElement(M.a,{style:{color:O.a[500]},fontSize:"small"}))),i.a.createElement(l.a,{display:"inline"},i.a.createElement(P.a,{onClick:function(){return e.changeTheme(L.a)}},i.a.createElement(M.a,{style:{color:L.a[500]},fontSize:"small"}))),i.a.createElement(l.a,{display:"inline"},i.a.createElement(P.a,{onClick:function(){return e.changeTheme(j.a)}},i.a.createElement(M.a,{style:{color:j.a[500]},fontSize:"small"}))),i.a.createElement(l.a,{display:"inline"},i.a.createElement(P.a,{onClick:function(){return e.changeTheme(B.a)}},i.a.createElement(M.a,{style:{color:B.a[500]},fontSize:"small"}))),i.a.createElement(l.a,{display:"inline"},i.a.createElement(P.a,{onClick:function(){return e.changeTheme("black")}},i.a.createElement(M.a,{style:{color:"#000"},fontSize:"small"})))))))))}var H=S()((function(e){return{type:{textAlign:"justify",textIndent:e.spacing(5),paddingBottom:e.spacing(1)}}}));function F(e){var a=H();return e.data.items.map((function(e){return i.a.createElement(l.a,{className:a.type,dangerouslySetInnerHTML:{__html:e}})}))}function W(e){return e.data.items.filter((function(e){return e.expanded})).map((function(e){return i.a.createElement(l.a,null,i.a.createElement("b",null,e.name,": "),i.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.items.join(", ")+"."}}))}))}var U=t(171),G=t(170),Q=S()((function(e){return{root:{alignItems:"center"},avatar:{width:e.spacing(4),height:e.spacing(4)},expand:{transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:500})},expandOpen:{transform:"rotate(180deg)",transition:e.transitions.create("transform",{duration:500})},icon:{textAlign:"end",color:e.palette.primary.main},divider:{height:1},company:{fontWeight:"bold",color:e.palette.primary.dark,fontSize:"1.5em"},companyOther:{fontWeight:"bold",color:e.palette.primary.dark,fontSize:"1.1em"},period:{color:e.palette.primary.light},title:{textAlign:"end"},iconContainer:{textAlign:"end"},item:{display:"list-item",marginLeft:24}}}));function z(e){var a=Q(),t=e.data,r=i.a.useState(e.expanded),o=Object(s.a)(r,2),c=o[0],d=o[1];return Object(n.useEffect)((function(){d(e.expanded)}),[e]),i.a.createElement(g.a,{container:!0,spacing:2,className:a.root},i.a.createElement(g.a,{item:!0,xs:4,className:t.items?a.company:a.companyOther},i.a.createElement(g.a,{container:!0},t.items&&t.logo?i.a.createElement(i.a.Fragment,null,i.a.createElement(g.a,{item:!0,xs:1},i.a.createElement(C.a,{variant:"square",src:t.logo,className:a.avatar})),i.a.createElement(g.a,{item:!0,xs:11,style:{paddingLeft:12}},t.company)):i.a.createElement(i.a.Fragment,null,t.company))),i.a.createElement(g.a,{item:!0,xs:3,className:a.period},t.period),i.a.createElement(g.a,{item:!0,xs:5,className:a.title},i.a.createElement(l.a,{padding:1,display:"inline"},t.title),i.a.createElement(P.a,{size:"small",className:c?a.expandOpen:a.expand,onClick:function(){d(!c)}},t.items&&i.a.createElement(G.a,{className:a.icon}))),t.items&&i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(k.a,{className:a.divider})),i.a.createElement(U.a,{in:c},i.a.createElement(g.a,{item:!0,xs:12},t.items&&t.items.map((function(e){return i.a.createElement(l.a,{className:a.item,dangerouslySetInnerHTML:{__html:e}})}))),t.projectItems&&i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement("h4",{style:{margin:12}},t.projectTitle),t.projectItems.map((function(e){return i.a.createElement(l.a,{className:a.item,dangerouslySetInnerHTML:{__html:e}})})))))}function K(e){return e.data.items.map((function(e){return i.a.createElement(l.a,{padding:1,paddingBottom:2},i.a.createElement(z,{data:e,expanded:e.expanded}))}))}var V=t(172),X=t(173),q=t(174),_=S()((function(e){return{card:{padding:e.spacing(1),borderRadius:e.spacing(1)},expand:{transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:500})},expandOpen:{transform:"rotate(180deg)",transition:e.transitions.create("transform",{duration:500})},icon:{color:e.palette.primary.main},divider:{height:2}}}));function Y(e){var a=_(),t=e.title,r=i.a.useState(e.expanded),o=Object(s.a)(r,2),c=o[0],l=o[1];return Object(n.useEffect)((function(){l(e.expanded)}),[e]),i.a.createElement(V.a,{className:a.card},i.a.createElement(X.a,{title:t,action:i.a.createElement(P.a,{className:c?a.expandOpen:a.expand,onClick:function(){l(!c)}},i.a.createElement(G.a,{className:a.icon}))}),i.a.createElement(U.a,{in:c},i.a.createElement(k.a,{className:a.divider}),i.a.createElement(q.a,null,e.children)))}function $(e){var a=e.data;return i.a.createElement(g.a,{container:!0,spacing:2},a.items.map((function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(g.a,{item:!0,xs:4,style:{fontSize:"1.2rem"}},e.title),i.a.createElement(g.a,{item:!0,xs:8,style:{alignSelf:"center"}},e.detail))})))}function Z(e){var a=e.data;return i.a.createElement(g.a,{container:!0,spacing:2},a.items.map((function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(g.a,{item:!0,xs:4},i.a.createElement("b",null,e.title)),i.a.createElement(g.a,{item:!0,xs:8},e.detail))})))}var ee=S()((function(e){return{root:{"& b":{color:e.palette.text.secondary},"& mark":{color:e.palette.mark.color,backgroundColor:e.palette.mark.backgroundColor}}}}));function ae(e){var a=ee(),t=i.a.useState(y.get()),n=Object(s.a)(t,2),r=n[0],o=n[1];return i.a.createElement(g.a,{container:!0,spacing:2,className:a.root},i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(R,{data:r.header,onChange:function(e){o(y.find(e.target.value))},changeTheme:e.changeTheme})),i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(Y,{title:r.profile.title,expanded:r.profile.expanded},i.a.createElement(F,{data:r.profile}))),i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(Y,{title:r.technicalSkills.title,expanded:r.technicalSkills.expanded},i.a.createElement(W,{data:r.technicalSkills}))),i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(Y,{title:r.careerHistory.title,expanded:r.careerHistory.expanded},i.a.createElement(K,{data:r.careerHistory}))),i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(Y,{title:r.education.title,expanded:r.education.expanded},i.a.createElement($,{data:r.education}))),i.a.createElement(g.a,{item:!0,xs:12},i.a.createElement(Y,{title:r.courses.title,expanded:r.courses.expanded},i.a.createElement(Z,{data:r.courses}))))}var te=t(64),ne=t(66),ie=b()({typography:{h4:{fontWeight:"bold"},h5:{fontWeight:"bold"},fontSize:10,htmlFontSize:12},palette:{primary:{main:"#000",contrastText:"#000"},secondary:{main:"#000"},text:{primary:"#000",secondary:"#000"},divider:"#000",background:{default:te.a[300]},mark:{color:"#ffffff",backgroundColor:"#ef6c00"}},breakpoints:{values:{md:1e3}}});function re(e){return b()({typography:{h4:{fontWeight:"bold"},h5:{fontWeight:"bold"},fontSize:10,htmlFontSize:12},palette:{primary:e,secondary:ne.a,text:{primary:e[500],secondary:ne.a[500]},divider:e[500],background:{default:te.a[300]},mark:{color:"#ffffff",backgroundColor:"#ef6c00"}},breakpoints:{values:{md:1e3}}})}function oe(){var e=i.a.useState(re(O.a)),a=Object(s.a)(e,2),t=a[0],n=a[1];return i.a.createElement(p.a,{theme:t},i.a.createElement(u.a,null),i.a.createElement(c.a,null,i.a.createElement(l.a,{padding:2},i.a.createElement(d.a,{maxWidth:"md"},i.a.createElement(ae,{changeTheme:function(e){n("black"===e?ie:re(e))}})))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},91:function(e){e.exports=JSON.parse('{"header":{"name":"Yasin Efe","title":"Lead Software Engineer","type":"Contractor","email":"yasinefe@gmail.com","mobile":"* **** ****","linkedin":"linkedin.com/in/yasinefe","github":"github.com/yasinefe"},"profile":{"title":"PROFILE","expanded":true,"items":["Excellent knowledge and <b>more than 15 years</b> hands-on experience in all phases of <b>back-end application/service</b> development, using <b>Java and Spring Framework</b>. Highly skilled in implementing <b>Scalable & High Available</b> application and microservices. Experience of designing interfaces with <b>REST APIs</b> and <b>Web Services</b>. Strong understanding of applying <b>Agile and Extreme Programming</b>, Test Driven Development <b>(TDD)</b> and Behaviour Driven Development <b>(BDD)</b>, Continuous Integration <b>(CI)</b> and Delivery <b>(CD)</b>, <b>Pair Programming</b> to deliver well designed and tested applications and services.","Passionate about using new technologies and applying them to real world problems. Interested in <b>Computer Mathematics, Algorithms, Artificial Intelligence, Machine Learning</b> and <b>Deep Learning</b>."]},"technicalSkills":{"title":"TECHNICAL SKILLS","expanded":true,"items":[{"name":"Languages","expanded":true,"items":["Java 11","Groovy","Python","Kotlin","Node JS","OOP","Functional Programming","Reactive Programming","Design Patterns"]},{"name":"Frameworks","expanded":true,"items":["Spring Framework (Core, MVC, WebFlux, JDBC, AOP, JaxWS, REST, Cache, Transaction Management, Security, JPA, JMS and Hibernate Support)","Spring Boot","Akka (Actors, Streams, FSM, Persistence, Cluster, Distributed Data)","Project Reactor","Apache Camel","JMX","JPA","Hibernate","Maven","Gradle","NPM"]},{"name":"Queues","expanded":true,"items":["Active MQ","Rabbit MQ","Kafka"]},{"name":"Web Frameworks","expanded":true,"items":["React JS","Angular","HTML","Java Script","CSS","Material UI","Bootstrap","GraphQL"]},{"name":"Processes","expanded":true,"items":["Agile & Extreme Programming","Scrum","Kanban","Continuous Integration (CI)","Continuous Delivery (CD)","GitLab Pipelines","Jenkins","Bamboo","Concourse","Code Review","Pair Programming"]},{"name":"Test Driven Development (TDD)","expanded":true,"items":["JUnit","Mockito","EasyMock","Scala Test","Kotlin Test"]},{"name":"Behaviour Driven Development (BDD)","expanded":true,"items":["Cucumber","JBehave","Spock","Geb and Wiremock"]},{"name":"Protocols","expanded":true,"items":["REST Services (JSON and XML)","Web Services","SOAP","HTTP/S","TCP","FTP","SNMP","SMPP","SS7","TLS"]},{"name":"Cloud & Container","expanded":true,"items":["Cloud Foundry","PCF","AWS","Docker","Kubernetes","Google Cloud Platform (GCP)","Azure"]},{"name":"Tools","expanded":true,"items":["IntelliJ Idea","XCode","Eclipse","Jira","Nexus","Jacoco","Git (GitHub, GitLab)","Terraform, Helm","Kibana","Prometheus","Apigee"]},{"name":"Databases","expanded":true,"items":["Oracle","PL-SQL","My SQL","HSQL","MongoDB","Elastic Search","Cosmos DB"]},{"name":"Application Servers","expanded":true,"items":["Apache Server","Tomcat","Jetty","OC4J","JBoss"]},{"name":"Operating Systems","expanded":true,"items":["Linux","Solaris","Shell/Bash Script"]}]},"careerHistory":{"title":"CAREER HISTORY","expanded":true,"items":[{"expanded":true,"company":"UBS","period":"2019/11 \u2013 Present","title":"Lead Java Developer \u2013 Contractor","logo":"reactjs-cv/static/images/ubs.png","items":["Designed and developed microservices using <b>Java 8</b>, <b>Spring Boot</b> exposing <b>REST</b> APIs for external & internal clients.","Integrated microservices using <b>Kafka</b> and <b>Kafka Streams</b>, with <b>Avro Schema</b> and <b>Schema Registry</b>.","Created a user interface to visualise complex data flow through microservices using <b>React JS</b> and <b>Material UI</>.","Implemented <b>REST</b> APIs using <b>JWT</b> authentication and developed authorization service using <b>HSM</b> for external clients.","Defined and built infrastructure on <b>Azure</b> and <b>Cosmos DB</b> using <b>Infrastructure as Code</b> approach with <b>Terraform</b>.","<b>Other technologies used:</b> Lombok, Jira, IntelliJ, Cucumber, Mockito, Spring JPA, Maven, TeamCity, Jacoco, GitHub, OpenAPI."],"projectTitle":"Projects","projectItems":["<b>GED (Global Equity Derivatives) - Microservices:</b> Provides trading services for Client Facing Sales and Trading platform."]},{"expanded":true,"company":"Mastercard","period":"2018/07 \u2013 2019/11 (1y 5m)","title":"Lead Java Developer \u2013 Contractor","logo":"reactjs-cv/static/images/mastercard.png","items":["Developed microservices using <b>Java 11</b>, <b>Kotlin</b>, <b>Spring Boot</b>, <b>Akka</b> backed with <b>Casandra</b>, <b>VoltDB</b> and <b>Oracle DB</b>.","Integrated microservices using <b>Kafka</b>, <b>Akka</b> (<b>Streams</b>, <b>Http</b>, <b>Persistence</b>, <b>Cluster</b> and <b>Distributed Data</b>), <b>REST</b>.","Built infrastructure on <b>GCP</b> (Google Cloud Platform) using <b>Infrastructure as Code</b> approach with <b>Terraform</b>.","Worked in agile environment, developed microservices <b>TDD</b>, <b>BDD</b>, fully automated <b>CI</b> and <b>CD</b>.","Containerised and deployed microservices using <b>Docker</b>, <b>Kubernetes</b>, <b>Helm</b> on <b>GCP</b>.","Designed and created <b>highly available</b>, <b>low latency</b> services to support <b>10K</b> transaction per second.","Integrated microservices with <b>EFK</b> (Elastic Search, FluentD, Kibana) for log monitoring and tracing.","Designed to provide highly secure payment system which will be deployed on <b>Critical National Infrastructure</b> of a country.","<b>Other technologies used:</b> Flyway, Lombok, Jira, IntelliJ, Cucumber, Mockito, Spring JPA, Kotlin Test, Gradle, Maven, SonarQube, Snyk, Jacoco, PI Test, GitLab and GitLab Pipelines."],"projectTitle":"Projects","projectItems":["<b>IPSX \u2013 Microservices:</b> Next-Gen Instant Payment System (real time payment processor) developed with Java 11 and Akka."]},{"expanded":true,"company":"HSBC","period":"2017/04 \u2013 2018/06 (1y 3m)","title":"Senior Java Developer \u2013 Contractor","logo":"reactjs-cv/static/images/hsbc.png","items":["Developed and integrated operable microservices using <b>Java 8</b>, <b>Spring Boot</b> backed with <b>MongoDB</b>.","Integrated microservices with <b>Spring Cloud Config</b> to centralise and make config changes without interruption.","Implemented <b>GraphQL</b> based API to provide flexible, performant and client centric endpoint.","Provided reactive APIs using <b>Reactive Programming</b> with Java Reactor library and spring mvc reactor support.","Used <b>PCF</b> (Pivotal Cloud Foundry) to deploy, scale and maintain multiple environments for microservices.","Integrated microservices with <b>Splunk</b> to monitor services and trace transactions for different environments.","Worked in agile environment, developed microservices with <b>TDD</b>, <b>BDD</b>, <b>CI</b> and <b>CD</b>.","<b>Other technologies used:</b> Splunk, Jira, IntelliJ, Swagger, Cucumber, Mockito."],"projectTitle":"Projects","projectItems":["<b>TED \u2013 Microservices:</b> Provides GraphQL and REST APIs for a tablet application, used by staff in HSBC branches."]},{"expanded":true,"company":"Marks & Spencer","period":"2016/07 \u2013 2017/03 (9m)","title":"Lead & Senior Java Developer - Contractor","logo":"reactjs-cv/static/images/mns.jpeg","items":["<b>Mentored</b> and <b>guided</b> team members to improve their technical skills focusing on <b>TDD</b>, <b>Agile</b> and <b>CI</b> / <b>CD</b>.","Developed microservices which expose <b>REST</b> interfaces using <b>Java 8</b> and <b>Spring Boot</b>.","Used <b>AWS</b>, <b>Cloud Foundry</b> and <b>Docker</b> to deploy microservices, such as Product, Price, Category etc.","Built <b>AWS</b> infrastructure using <b>Terraform</b> such as VPC, Subnet, EC2, RDS, S3, Routing, Volumes, Lambda, etc.","Worked in <b>Agile</b> environment using <b>Scrum</b> and <b>Kanban</b> with <b>TDD</b> (Mockito), <b>BDD</b> and <b>Pair Programming</b>.","Created pipeline to build, release, deploy and deliver microservices using <b>Concourse CI</b> and <b>CD</b> tool.","Designed and created operable and maintainable microservices using <b>Pingdom</b>, <b>Loggly</b> and <b>Log Entries</b> tool.","Used <b>RabbitMQ</b> and <b>Kafka</b> to retrieve and store xml data exported from SAP system.","<b>Other technologies used:</b> Apigee, Terragrunt, Trello, Jira, IntelliJ, Node JS, Swagger."],"projectTitle":"Projects","projectItems":["<b>Product Services \u2013 Microservices:</b> Provides REST APIs for mns.com and mobile app to sell products online.","<b>Price Services \u2013 Microservices:</b> Provides REST APIs for third parties and customer services."]},{"expanded":true,"company":"Sky","period":"2014/10 \u2013 2016/06 (1y 9m)","title":"Senior Java Developer - Contractor","logo":"reactjs-cv/static/images/sky.png","items":["Developed microservices which expose <b>HAL</b> and <b>HATEOAS</b> based <b>REST</b> interfaces using <b>Java</b> and <b>Python</b>.","Used <b>Spring Boot</b>, <b>Groovy</b> to provide APIs designed as <b>microservices</b> for Single Sign On project (SkyID).","Implemented <b>Single Sign On</b> APIs for authentication and authorisation using <b>OAuth 2</b> specification.","Worked in pure <b>Agile</b> process with <b>TDD</b>, <b>BDD</b> (Spock and Cucumber) and <b>Pair Programming</b>.","Experienced using <b>Gradle</b> and <b>Jenkins</b> for continuous integration and fully automated deployment process.","Implemented database requirements using <b>Cassandra DB</b> and <b>Memcached</b> for the applications.","Used <b>Nimbus</b> cloud system (<b>Cloud Foundry</b>) to deploy and run the applications on different environments.","Used GIT with <b>branch</b> per feature and <b>workflow</b> approaches to manage sources.","<b>Other technologies used:</b> IntelliJ, Nexus, Tomcat, Unix, JUnit, Mockito."],"projectTitle":"Projects","projectItems":["<b>PSP \u2013 Product Sales Channel \u2013 Microservices:</b> Provides REST APIs to allow Sky customers to buy Sky products online.","<b>SkyID \u2013 Microservices:</b> Provides HATEOAS based REST APIs to allow Sky customers to manage their sky account."]},{"expanded":true,"company":"Salmon","period":"2013/08 \u2013 2014/09 (1y 2m)","title":"Senior Java Developer - Contractor","logo":"reactjs-cv/static/images/salmon.png","items":["Developed several back-end applications using <b>J2EE</b>, <b>Design Patterns</b>, <b>OOP</b> and <b>Spring Framework</b>.","Established an effective solution to change existing <b>SOAP</b> web services to <b>REST (JSON)</b> using <b>Spring MVC</b>.","Used <b>Spring Security</b> with session based and <b>HTTP Basic</b> authentication to provide secure REST web services.","Customized and configured <b>Spring Security</b> to provide highly secure REST web services with encryption.","Solved all <b>cross-domain</b> problems faced on front end, implemented client and back-end solutions.","Developed applications using <b>Test Driven Development</b> (TDD) with <b>JUnit</b> and <b>Mockito</b>.","<b>Other technologies used:</b> Maven, JMS, Active MQ, JSP, HTML, JavaScript, CSS, AJAX, JQuery, Pair Programming, Eclipse, Archiva, Cobertura, SVN, SOAP UI, Selenium, My SQL, Tomcat, Apache Server and Unix."],"projectTitle":"Projects","projectItems":["<b>MyAudi \u2013 Microservices:</b> Provides more than 100 secure and non-secure REST services using ESB and SOA architecture.","<b>AUDI Product DB Services:</b> Manages all data for Audi cars and related products, exposes 50 WS interfaces for clients.","<b>AUDI Web Services:</b> Provides REST interfaces for front end forms in Audi.co.uk and Audi mobile applications."]},{"expanded":false,"company":"Vodafone","period":"2009/12 \u2013 2013/06 (3y 7m)","title":"Lead & Senior Java Developer","logo":"reactjs-cv/static/images/vodafone.png","items":["Designed and developed various enterprise back-end applications using <b>Java</b>, <b>J2EE</b> and <b>Spring Framework</b>.","Used many modules of <b>Spring Framework</b> such as JDBC, Hibernate, Transaction, AOP, JaxWS, MVC, Cache.","Developed numerous web applications using <b>Spring MVC</b>, JSP, HTML, JavaScript, JQuery, CSS and AJAX.","Researched and implemented <b>MapReduce</b> functions to query users in a specific location using Hadoop, HDFS.","Refactored existing applications using <b>OOP</b>, <b>Design Patterns</b> and <b>SOLID</b> principles.","Defined required interfaces and implemented them for n-tier systems using <b>SOAP</b> and <b>REST</b> (<b>JSON</b> and <b>XML</b>).","Developed a number of <b>web services</b> using Spring MVC, JaxWS, Axis, Spring Security and WSS.","Implemented several <b>scalable</b>, <b>highly available</b> and <b>multi-threaded</b> applications which run in <b>low latency</b>.","Integrated projects with <b>Continuous Integration</b> tool (Bamboo), and configured it to be used more efficiently.","Implemented requirements using <b>TDD</b> with JUnit, Mockito, Easy Mock and <b>BDD</b> with JBehave, Spock and GEB.","Designed and developed a reusable application to keep web services <b>backward compatible</b> using <b>Groovy</b>.","Created functional tests using <b>Groovy</b>, led the test team to use Groovy for acceptance tests.","Used a number of protocols such as <b>HTTP</b>, <b>TCP</b>, <b>FTP</b>, <b>JMX</b>, <b>JMS</b> and <b>SNMP</b> to develop integrated applications.","Defined database models for various applications, and used <b>ORM</b> tools, such as <b>Hibernate</b>, <b>JPA</b>.","Researched <b>Enterprise Service Bus</b> solutions, to provide <b>authorization</b>, <b>throttling</b> and <b>routing</b> functionalities.","Performed <b>load testing</b> using JMeter and SOAP UI, provided solutions for performance related issues.","<b>Other technologies used:</b> Maven, Eclipse, Toad, Jira, Nexus, Archiva, Clover, Sonar, Crucible, Cobertura, Jira Agile, CVS, SVN, Oracle, PL-SQL, Tomcat, Jetty, Unix and Solaris."]},{"expanded":false,"company":"BNP Paribas","period":"2008/04 \u2013 2009/11 (1y 8m)","title":"Senior Java Developer","logo":"reactjs-cv/static/images/bnp.png","items":["Led a development team to create an <b>online banking</b> application using <b>Java</b>, <b>Spring Framework</b> and <b>Struts</b>.","Developed a <b>web application</b> with French colleagues in a multinational environment using internationalisation.","Researched a number of <b>rich client</b> solutions such as <b>ExtJS</b>, <b>JQuery</b>, <b>Backbone</b>, and created prototypes.","Developed a rich client web application using <b>JSP</b>, <b>HTML</b>, <b>JavaScript</b>, <b>JQuery</b>, <b>CSS</b>, <b>AJAX</b> and <b>JSTL</b>.","Found a specific solution for each performance issue of a <b>Single Page Application</b> (SPA) and increased quality.","<b>Other technologies used:</b> Design Patterns, OOP, Spring Framework (Core, JDBC Dao Support, Cache, Transaction Management), Web Service, SOAP, HTTP, Toad, Clear Case, RSA, Selenium Web Drivers, Oracle, PL-SQL, OC4J, Web Sphere and Unix."]},{"expanded":false,"company":"Vodafone","period":"2005/04 \u2013 2008/03 (3y)","title":"Java Developer","logo":"reactjs-cv/static/images/vodafone.png","items":["Designed and developed a number of back-end applications using <b>Java</b>, <b>J2EE</b> and <b>Spring Framework</b>.","Developed several web applications using <b>Spring MVC</b>, <b>Struts</b>, JSP, HTML, JQuery, CSS and AJAX.","Redesigned and refactored existing applications using <b>OOP Design Patterns</b> and <b>SOLID</b> principles.","Developed many applications, which expose <b>SOAP</b> web services using Spring MVC, JaxWS, Axis.","Designed and developed <b>scalable</b>, <b>highly available</b> and <b>multi-threaded</b> applications using <b>Java Concurrency</b>.","Implemented applications using Test Driven Development (<b>TDD</b>) with <b>JUnit</b> and <b>Easy Mock</b>.","Used a number of protocols such as <b>HTTP</b>, <b>TCP</b>, <b>FTP</b>, <b>SMPP</b> and <b>SNMP</b> to develop integrated applications.","Performed <b>load tests</b> using various simulators, revised and fixed performance related issues.","Developed an application to provide <b>Single Sign-On</b> (<b>SSO</b>), authentication and authorisation functionalities.","Implemented a fully configurable client application to provide monitoring capabilities using <b>SNMP</b> protocol.","<b>Other technologies used:</b> Spring Framework, Hibernate, Eclipse, Toad, Jira, Bamboo, Cobertura, CVS, Oracle, PL-SQL, My SQL, HSQL, Tomcat, Jetty, Unix and Solaris."]},{"expanded":false,"company":"Millitary Service (KKK)","period":"2004/07 \u2013 2005/03 (9m)","title":"Web Application Developer"},{"expanded":false,"company":"Cozum Software Services","period":"2002/08 \u2013 2004/03 (1y 8m)","title":"Application Developer \u2013 Part Time"},{"expanded":false,"company":"Markum.NET","period":"2001/03 \u2013 2001/10 (8m)","title":"Application Developer \u2013 Part Time"}]},"education":{"title":"EDUCATION","expanded":true,"items":[{"title":"1998 \u2013 2002","detail":"BSc in Computer Engineering - Istanbul University"}]},"courses":{"title":"COURSES","expanded":true,"items":[{"title":"Spring Framework (Certified)","detail":"Mar 2011 (40 Hours) - Spring Framework (at Bilginc)."},{"title":"Web Services (Certified)","detail":"May 2010 (40 Hours) - DW3111 Creating Web Services (at Sun)."},{"title":"Oracle &PL/SQL (Certified)","detail":"Mar 2007 (50 Hours) - SQL Fundamentals, SQL and PL/SQL Fundamentals, Advanced PL/SQL, and SQL Tuning Workshop (at Oracle University)."},{"title":"UML & Use Cases (Certified)","detail":"June 2008 (16 Hours) - Requirement Management with Use Cases (at Bildem)."},{"title":"Project Management (Certified)","detail":"June 2007 (16 Hours) \u2013 The Art of Project Management (at Project Management Institute)."},{"title":"Test Driven Development","detail":"Oct 2007 (16 Hours) - Agile Programming and Test Driven Development."}]}}')}},[[104,1,2]]]);
//# sourceMappingURL=main.24b0a4a7.chunk.js.map