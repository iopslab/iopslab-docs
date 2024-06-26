import{_ as c,E as o,Z as i,$ as r,a0 as n,a3 as s,a1 as a,a2 as u,a4 as l}from"./framework-64cb0dab.js";const d={},m=n("h1",{id:"installation-docker",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#installation-docker","aria-hidden":"true"},"#"),s(" Installation: Docker")],-1),k={href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"},v=n("h2",{id:"main-process",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#main-process","aria-hidden":"true"},"#"),s(" Main Process")],-1),b=n("p",null,"There are several deployment modes for Docker installation, but the main process is similar.",-1),g={href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"},y=n("li",null,"Pull Docker image of Crawlab (and MongoDB if you have no external MongoDB instance)",-1),_=n("li",null,[s("Create "),n("code",null,"docker-compose.yml"),s(" and make configurations")],-1),w=n("li",null,"Start Docker containers",-1),q=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"Note"),n("p",null,"For following guidance, we will assume you have installed Docker and Docker-Compose, and already pulled Docker images.")],-1),A=n("h2",{id:"standalone-node-deployment",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#standalone-node-deployment","aria-hidden":"true"},"#"),s(" Standalone-Node Deployment")],-1),O=n("strong",null,"Standalone-Node Deployment (SND)",-1),N=l(`<p>Create <code>docker-compose.yml</code> and enter the content below.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">master</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> crawlabteam/crawlab
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> crawlab_master
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">CRAWLAB_NODE_MASTER</span><span class="token punctuation">:</span> <span class="token string">&quot;Y&quot;</span>  <span class="token comment"># Y: master node</span>
      <span class="token key atrule">CRAWLAB_MONGO_HOST</span><span class="token punctuation">:</span> <span class="token string">&quot;mongo&quot;</span>  <span class="token comment"># mongo host address. In the docker compose network, directly refer to the service name</span>
      <span class="token key atrule">CRAWLAB_MONGO_PORT</span><span class="token punctuation">:</span> <span class="token string">&quot;27017&quot;</span>  <span class="token comment"># mongo port </span>
      <span class="token key atrule">CRAWLAB_MONGO_DB</span><span class="token punctuation">:</span> <span class="token string">&quot;crawlab&quot;</span>  <span class="token comment"># mongo database </span>
      <span class="token key atrule">CRAWLAB_MONGO_USERNAME</span><span class="token punctuation">:</span> <span class="token string">&quot;username&quot;</span>  <span class="token comment"># mongo username</span>
      <span class="token key atrule">CRAWLAB_MONGO_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&quot;password&quot;</span>  <span class="token comment"># mongo password </span>
      <span class="token key atrule">CRAWLAB_MONGO_AUTHSOURCE</span><span class="token punctuation">:</span> <span class="token string">&quot;admin&quot;</span>  <span class="token comment"># mongo auth source </span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/.crawlab/master:/root/.crawlab&quot;</span>  <span class="token comment"># persistent crawlab metadata</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/crawlab/master:/data&quot;</span>  <span class="token comment"># persistent crawlab data</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/var/crawlab/log:/var/logs/crawlab&quot;</span> <span class="token comment"># log persistent </span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8080:8080&quot;</span>  <span class="token comment"># exposed api port</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> mongo

  <span class="token key atrule">mongo</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mongo<span class="token punctuation">:</span><span class="token number">4.2</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MONGO_INITDB_ROOT_USERNAME</span><span class="token punctuation">:</span> <span class="token string">&quot;username&quot;</span>  <span class="token comment"># mongo username</span>
      <span class="token key atrule">MONGO_INITDB_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&quot;password&quot;</span>  <span class="token comment"># mongo password</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/.crawlab/master:/root/.crawlab&quot;</span>  <span class="token comment"># persistent crawlab metadata</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/crawlab/mongo/data/db:/data/db&quot;</span>  <span class="token comment"># persistent mongo data</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;27017:27017&quot;</span>  <span class="token comment"># expose mongo port to host machine</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, execute <code>docker-compose up -d</code> and navigate to <code>http://&lt;your_ip&gt;:8080</code> in the browser to start using Crawlab.</p><h2 id="multi-node-deployment" tabindex="-1"><a class="header-anchor" href="#multi-node-deployment" aria-hidden="true">#</a> Multi-Node Deployment</h2>`,4),M=l(`<p><strong>Multi-Node Deployment (MND)</strong> is normally used in production environment, where a cluster consisted of a Master Node and multiple Worker Nodes is deployed. Master Node is connected by Worker Nodes, and it serves as the central control system in the cluster.</p><p>The configuration for MND is more complex than SND, but you can follow the guidelines below to set up a small cluster, which would be quite straightforward.</p><h3 id="set-up-master-node" tabindex="-1"><a class="header-anchor" href="#set-up-master-node" aria-hidden="true">#</a> Set up Master Node</h3><p>Create <code>docker-compose.yml</code> in <strong>Master Node</strong> and enter the content below. Then start by executing <code>docker-compose up -d</code>.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># master node</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">master</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> crawlabteam/crawlab
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> crawlab_master
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">CRAWLAB_NODE_MASTER</span><span class="token punctuation">:</span> <span class="token string">&quot;Y&quot;</span>  <span class="token comment"># Y: master node</span>
      <span class="token key atrule">CRAWLAB_MONGO_HOST</span><span class="token punctuation">:</span> <span class="token string">&quot;mongo&quot;</span>  <span class="token comment"># mongo host address. In the docker compose network, directly refer to the service name</span>
      <span class="token key atrule">CRAWLAB_MONGO_PORT</span><span class="token punctuation">:</span> <span class="token string">&quot;27017&quot;</span>  <span class="token comment"># mongo port </span>
      <span class="token key atrule">CRAWLAB_MONGO_DB</span><span class="token punctuation">:</span> <span class="token string">&quot;crawlab&quot;</span>  <span class="token comment"># mongo database </span>
      <span class="token key atrule">CRAWLAB_MONGO_USERNAME</span><span class="token punctuation">:</span> <span class="token string">&quot;username&quot;</span>  <span class="token comment"># mongo username</span>
      <span class="token key atrule">CRAWLAB_MONGO_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&quot;password&quot;</span>  <span class="token comment"># mongo password </span>
      <span class="token key atrule">CRAWLAB_MONGO_AUTHSOURCE</span><span class="token punctuation">:</span> <span class="token string">&quot;admin&quot;</span>  <span class="token comment"># mongo auth source </span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/.crawlab/master:/root/.crawlab&quot;</span>  <span class="token comment"># persistent crawlab metadata</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/crawlab/master:/data&quot;</span>  <span class="token comment"># persistent crawlab data</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/var/crawlab/log:/var/logs/crawlab&quot;</span> <span class="token comment"># log persistent </span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8080:8080&quot;</span>  <span class="token comment"># exposed api port</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9666:9666&quot;</span>  <span class="token comment"># exposed grpc port</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> mongo

  <span class="token key atrule">mongo</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mongo<span class="token punctuation">:</span><span class="token number">4.2</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MONGO_INITDB_ROOT_USERNAME</span><span class="token punctuation">:</span> <span class="token string">&quot;username&quot;</span>  <span class="token comment"># mongo username</span>
      <span class="token key atrule">MONGO_INITDB_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&quot;password&quot;</span>  <span class="token comment"># mongo password</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/crawlab/mongo/data/db:/data/db&quot;</span>  <span class="token comment"># persistent mongo data</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;27017:27017&quot;</span>  <span class="token comment"># expose mongo port to host machine</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="set-up-worker-nodes" tabindex="-1"><a class="header-anchor" href="#set-up-worker-nodes" aria-hidden="true">#</a> Set up Worker Nodes</h3><p>Create <code>docker-compose.yml</code> in each <strong>Worker Node</strong> and enter the content below. Then start by executing <code>docker-compose up -d</code>.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># worker node</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">worker</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> crawlabteam/crawlab
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> crawlab_worker
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">CRAWLAB_NODE_MASTER</span><span class="token punctuation">:</span> <span class="token string">&quot;N&quot;</span>  <span class="token comment"># N: worker node</span>
      <span class="token key atrule">CRAWLAB_GRPC_ADDRESS</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;master_node_ip&gt;:9666&quot;</span>  <span class="token comment"># grpc address</span>
      <span class="token key atrule">CRAWLAB_FS_FILER_URL</span><span class="token punctuation">:</span> <span class="token string">&quot;http://&lt;master_node_ip&gt;:8080/api/filer&quot;</span>  <span class="token comment"># seaweedfs api</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/.crawlab/worker:/root/.crawlab&quot;</span>  <span class="token comment"># persistent crawlab metadata</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/crawlab/worker:/data&quot;</span>  <span class="token comment"># persistent crawlab data</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Please note that you should replace <code>&lt;master_node_ip&gt;</code> with the IP address of Master Node and make sure it is accessible by Worker Nodes.</p><p>After Master Node and Worker Nodes are all started, you can now navigate to <code>http://&lt;master_node_ip&gt;:8080</code> to start using Crawlab.</p><div class="hint-container warning"><p class="hint-container-title">Note</p><h3 id="expose-ports-of-master-node" tabindex="-1"><a class="header-anchor" href="#expose-ports-of-master-node" aria-hidden="true">#</a> Expose ports of Master Node</h3><p>As Worker Nodes connect to Master Node through ports <strong>8080</strong> (API) and <strong>9666</strong> (gRPC), you should make sure they are both opened and NOT blocked by firewall on Master Node.</p></div><h2 id="external-mongodb" tabindex="-1"><a class="header-anchor" href="#external-mongodb" aria-hidden="true">#</a> External MongoDB</h2><p>In MND introduced above, you may notice that MongoDB is by default deployed on Master Node. But performance wise, this handy deployment configuration can result in problems, because MongoDB itself can be a bottleneck particularly in a large-scale distributed system.</p><p>Fortunately, this issue can be resolved by using external MongoDB deployed in other nodes, or from cloud database service providers, e.g. AWS, Azure, Aliyun etc. By doing so, MongoDB can be easily scaled so that the database robustness would be ensured. Please refer to the diagram below.</p>`,14),f=l(`<p>The configuration file <code>docker-compose.yml</code> for Master Node is slightly different from that of <a href="#multi-node-deployment">default MND</a>. Please find the content as below.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># master node with external mongo</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">master</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> crawlabteam/crawlab
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> crawlab_master
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">CRAWLAB_NODE_MASTER</span><span class="token punctuation">:</span> <span class="token string">&quot;Y&quot;</span>  <span class="token comment"># Y: master node</span>
      <span class="token key atrule">CRAWLAB_MONGO_URI</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;mongo_uri&gt;&quot;</span>  <span class="token comment"># mongo uri (set this alone)</span>
      <span class="token key atrule">CRAWLAB_MONGO_HOST</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;mongo_host&gt;&quot;</span>  <span class="token comment"># mongo host address</span>
      <span class="token key atrule">CRAWLAB_MONGO_PORT</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;mongo_port&gt;&quot;</span>  <span class="token comment"># mongo port </span>
      <span class="token key atrule">CRAWLAB_MONGO_DB</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;mongo_db&gt;&quot;</span>  <span class="token comment"># mongo database </span>
      <span class="token key atrule">CRAWLAB_MONGO_USERNAME</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;mongo_username&gt;&quot;</span>  <span class="token comment"># mongo username</span>
      <span class="token key atrule">CRAWLAB_MONGO_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;mongo_password&gt;&quot;</span>  <span class="token comment"># mongo password </span>
      <span class="token key atrule">CRAWLAB_MONGO_AUTHSOURCE</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;mongo_auth_source&gt;&quot;</span>  <span class="token comment"># mongo auth source </span>
      <span class="token key atrule">CRAWLAB_MONGO_AUTHMECHANISM</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;mongo_auth_mechanism&gt;&quot;</span>  <span class="token comment"># mongo auth mechanism </span>
      <span class="token key atrule">CRAWLAB_MONGO_AUTHMECHANISMPROPERTIES</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;mongo_auth_mechanism_properties&gt;&quot;</span>  <span class="token comment"># mongo auth mechanism properties</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/.crawlab/master:/root/.crawlab&quot;</span>  <span class="token comment"># persistent crawlab metadata</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/crawlab/master:/data&quot;</span>  <span class="token comment"># persistent crawlab data</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/var/crawlab/log:/var/logs/crawlab&quot;</span> <span class="token comment"># log persistent </span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8080:8080&quot;</span>  <span class="token comment"># exposed api port</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9666:9666&quot;</span>  <span class="token comment"># exposed grpc port</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see, the service <code>mongo</code> is removed and MongoDB-related connection environment variables ( e.g. <code>CRAWLAB_MONGO_HOST</code>, <code>CRAWLAB_MONGO_PORT</code>) are changed to those of external MongoDB. You can leave some environment variables empty if you don&#39;t need them.</p>`,3);function R(D,B){const e=o("ExternalLinkIcon"),t=o("Mermaid"),p=o("RouterLink");return i(),r("div",null,[m,n("p",null,[s("Docker is the most convenient and easiest way to install and deploy Crawlab. If you are not familiar with Docker, you can refer to "),n("a",k,[s("Docker Official Site"),a(e)]),s(" and install it on your local machine. Make sure you have installed Docker before proceeding any further steps.")]),v,b,n("ol",null,[n("li",null,[s("Install "),n("a",g,[s("Docker"),a(e)]),s(" and "),n("a",h,[s("Docker-Compose"),a(e)])]),y,_,w]),q,A,a(t,{id:"mermaid-42",code:"eJxVzE0LgkAQgOF7v2Kga140KiQ6iFe71E087Me4K8zuyDoh/vsUgvD8Prw98Wy8SgLv6gAwfbRLavTwEhWtIo6YPdki1DgSLwGjrAogtI2aBBNssYN7lj0guLbh6LiuutVgtNtPFkII0A9E5fGsb4XOT4aJUzn7QfBP3M9criYv1M58AaVPNew="}),n("p",null,[O,s(" is similar to the configuration in "),a(p,{to:"/en/guide/quick-start.html"},{default:u(()=>[s("Quick Start")]),_:1}),s(", and it is normally for demo purpose or managing a small number of crawlers. In SND, all Docker containers including Crawlab and MongoDB are in only a single machine, i.e. Master Node (see diagram above).")]),N,a(t,{id:"mermaid-56",code:"eJyNzrEKwjAUheHdp7jgaocmIlLEydE6uDiUDml7a4K3TUlTQt/eBoMQUOh6/m84LWlXS2EsXO8bgHGqnkYMEvKJrEpuukG44EB67rC3CwDoilyMFg34WMIpSc7g0uKhzSuMkJYfGSKLIosjjyL3EfvGX7Ez4cJaRZRt99WRV2xXa9Imc1JZ/BKXBoMHwXj927AVhv83b4dfXRo="}),M,a(t,{id:"mermaid-100",code:"eJyNzsELgjAUx/F7f8WDrnlwiwqJDuIxO0TQQTzM+dTR9MmciP99WiMQgrr+vp+xV2gaZCWMhfN1BdD1WWlEW0Hca6u8C+UIEbaaxhobOwGAXBmUVlEDt/A11EksOosGZp3C0fNOMPjJnczDjeCnb+kiW0S2jHwRuYtlElNTUhS6D+ppxiafT7ajxul1obQO1tvswDO2kaTJBEOlLH7I4DuDO8G4/G7YH4b/NnXpzG4vGRcL8wR5BXQH"}),f])}const W=c(d,[["render",R],["__file","docker.html.vue"]]);export{W as default};
