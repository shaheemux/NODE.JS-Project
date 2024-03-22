"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[594],{9078:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var s=a(6768);const o={class:"container"},n=(0,s.Fv)('<div class="row"></div><div class="row justify-content-center"><p class="lead text-center"><em><u>About Us</u></em><br> Solar Panel Solutions is a leading provider of solar energy solutions. We specialize in providing high-quality solar panels and related products to help individuals and businesses harness the power of the sun.<br><br><strong>About Our Journey</strong><br> Solar Panel Solutions was founded in January 2018 by Sisipho and Shaheem. Our goal is to make solar energy accessible to everyone and contribute to a sustainable future. </p></div><div class="row justify-content-center"><div class="col-md-4"><div class="card"><img src="https://i.ibb.co/9h4wb8c/Whats-App-1kd.jpg" class="card-img-top" alt="Fissure in Sandstone"><div class="card-body"><h5 class="card-title">Sisipho</h5><p class="card-text">Front-end Developer</p></div></div></div><div class="col-md-4"><div class="card"><img src="https://i.ibb.co/N7rhVkr/20231009-140910.jpg" class="card-img-top" alt="Fissure in Sandstone"><div class="card-body"><h5 class="card-title">Shaheen</h5><p class="card-text">Back-end Developer</p></div></div></div></div>',3),r=[n];function l(t,e){return(0,s.uX)(),(0,s.CE)("div",o,r)}var d=a(1241);const i={},c=(0,d.A)(i,[["render",l]]);var u=c},9183:function(t,e,a){a.r(e),a.d(e,{default:function(){return x}});var s=a(6768),o=a(4232);const n=t=>((0,s.Qi)("data-v-4437a95b"),t=t(),(0,s.jt)(),t),r={class:"container"},l={class:"row"},d={class:"col d-flex justify-content-center flex-md-row flex-column gap-3"},i={class:"row mt-3"},c={class:"col"},u=n((()=>(0,s.Lk)("div",{class:"col"},[(0,s.Lk)("button",{class:"btn btn-success me-2","data-bs-toggle":"modal","data-bs-target":"#addNewProduct"}," Add New Product ")],-1))),m=n((()=>(0,s.Lk)("div",{class:"modal fade",id:"addNewProduct",tabindex:"-1","aria-labelledby":"addNewProductLabel","aria-hidden":"true"},null,-1))),p={class:"row mt-3"},v={class:"table table-responsive"},b=n((()=>(0,s.Lk)("th",{scope:"col"},"Image",-1))),f=n((()=>(0,s.Lk)("th",{scope:"col"},"Action",-1))),g=["src","alt"],h=["onClick"],k=["onClick"];function L(t,e,a,n,L,w){return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("div",r,[(0,s.Lk)("div",l,[(0,s.Lk)("div",d,[(0,s.Lk)("button",{class:"btn btn-primary me-2",onClick:e[0]||(e[0]=(...t)=>w.showUsers&&w.showUsers(...t))}," Users ")])]),(0,s.Lk)("div",i,[(0,s.Lk)("div",c,[(0,s.Lk)("button",{class:"btn btn-success ms-2",onClick:e[1]||(e[1]=(...t)=>w.toggleSorting&&w.toggleSorting(...t))},(0,o.v_)(L.sorting?"Disable Sorting":"Enable Sorting"),1)]),u]),m,(0,s.Lk)("div",p,[(0,s.Lk)("table",v,[(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th",{scope:"col",onClick:e[2]||(e[2]=t=>w.sort("name"))},"Name"),b,(0,s.Lk)("th",{scope:"col",onClick:e[3]||(e[3]=t=>w.sort("amount"))},"Amount"),f])]),(0,s.Lk)("tbody",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(w.sortedProducts,((t,e)=>((0,s.uX)(),(0,s.CE)("tr",{key:e},[(0,s.Lk)("td",null,(0,o.v_)(t.name),1),(0,s.Lk)("td",null,[(0,s.Lk)("img",{src:t.image,alt:t.name,style:{"max-width":"50px","max-height":"50px"}},null,8,g)]),(0,s.Lk)("td",null,"R"+(0,o.v_)(t.amount),1),(0,s.Lk)("td",null,[(0,s.Lk)("button",{class:"btn btn-light btn-sm",onClick:t=>w.editProduct(e)},"Edit",8,h),(0,s.Lk)("button",{class:"btn btn-danger btn-sm",onClick:t=>w.deleteProduct(e)},"Delete",8,k)])])))),128))])])])])])}var w={data(){return{productsData:[{name:"",image:"",amount:5},{name:" ",image:"",amount:7},{name:"  ",image:"",amount:53},{name:"  ",image:"",amount:241},{name:" ",image:"",amount:6}],sorting:!1}},computed:{sortedProducts(){return this.sorting?[...this.productsData].sort(((t,e)=>t.name.localeCompare(e.name))):this.productsData}},methods:{toggleSorting(){this.sorting=!this.sorting},editProduct(t){const e=prompt("Enter new name:"),a=prompt("Enter new amount:");null!==e&&null!==a&&this.$set(this.productsData,t,{...this.productsData[t],name:e,amount:parseFloat(a)})},deleteProduct(t){const e=confirm("Are you sure you want to delete this product?");e&&this.productsData.splice(t,1)},sort(t){this.sorting=!this.sorting,this.productsData.sort(((e,a)=>{const s="name"===t?e[t].toLowerCase():e[t],o="name"===t?a[t].toLowerCase():a[t];return this.sorting?s.localeCompare(o):o.localeCompare(s)}))},showUsers(){}},mounted(){this.productsData=[{name:"",image:"",amount:9},{name:"",image:"",amount:9},{name:"",image:"",amount:9},{name:"",image:"",amount:9},{name:"",image:"",amount:9}]}},y=a(1241);const C=(0,y.A)(w,[["render",L],["__scopeId","data-v-4437a95b"]]);var x=C},8156:function(t,e,a){a.r(e),a.d(e,{default:function(){return L}});var s=a(6768),o=a(5130);const n=t=>((0,s.Qi)("data-v-111e017f"),t=t(),(0,s.jt)(),t),r=n((()=>(0,s.Lk)("nav",{class:"navbar fixed-top"},null,-1))),l={id:"oi"},d={class:"mb-1"},i=n((()=>(0,s.Lk)("h2",{class:"h1-responsive font-weight-bold text-center my-4"},"Contact Us",-1))),c=n((()=>(0,s.Lk)("p",{class:"text-center w-responsive mx-auto mb-5"},"Please fill out the form below to contact us.",-1))),u={class:"row"},m={class:"col-md-6 mb-md-0 mb-5"},p=(0,s.Fv)('<div class="mb-3" data-v-111e017f><label for="Inputfirstname" class="form-label" data-v-111e017f>First Name</label><input type="text" name="first_name" class="form-control" id="Inputfirstname" required data-v-111e017f></div><div class="mb-3" data-v-111e017f><label for="Inputlastname" class="form-label" data-v-111e017f>Last Name</label><input type="text" name="surname" class="form-control" id="Inputlastname" required data-v-111e017f></div><div class="mb-3" data-v-111e017f><label for="InputEmail1" class="form-label" data-v-111e017f>Email address</label><input type="email" name="email" class="form-control" id="InputEmail1" required data-v-111e017f><div id="emailHelp" class="form-text" data-v-111e017f>We&#39;ll never share your email with anyone else.</div></div><div class="mb-3" data-v-111e017f><label id="message" for="exampleInputmessage" class="form-label" data-v-111e017f>Comments / Questions</label><input type="text" name="message" class="form-control" id="exampleInputmessage" required data-v-111e017f></div><button type="submit" class="btn btn-primary" data-v-111e017f>Submit</button>',5),v=[p],b=n((()=>(0,s.Lk)("div",{class:"col-md-6 text-center"},[(0,s.Lk)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.380871333916!2d18.46468787551112!3d-33.93133087320282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5d0712ac6519%3A0xf14e5c3d07208c27!2s30%20Cole%20St%2C%20Observatory%2C%20Cape%20Town%2C%207925!5e0!3m2!1sen!2sza!4v1709193056183!5m2!1sen!2sza",width:"400",height:"300",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})],-1)));function f(t,e,a,n,p,f){return(0,s.uX)(),(0,s.CE)("div",null,[r,(0,s.Lk)("main",l,[(0,s.Lk)("section",d,[i,c,(0,s.Lk)("div",u,[(0,s.Lk)("div",m,[(0,s.Lk)("form",{onSubmit:e[0]||(e[0]=(0,o.D$)(((...t)=>f.submitForm&&f.submitForm(...t)),["prevent"])),class:"container",id:"form"},v,32)]),b])])])])}var g={methods:{submitForm(){}}},h=a(1241);const k=(0,h.A)(g,[["render",f],["__scopeId","data-v-111e017f"]]);var L=k},8628:function(t,e,a){a.r(e),a.d(e,{default:function(){return S}});var s=a(6768),o=a(4232);const n={class:"container"},r=(0,s.Fv)('<div class="row"><div class="col"><input type="text" placeholder="Search product by name" class="form-control"></div><div class="col"><button class="btn btn-success">Sorting by price</button></div></div>',1),l={key:0,class:"row"},d={class:"card-title"},i={class:"card-text text-dark bg-gradient bg-dark-subtle p-2"},c={class:"card-text text-dark bg-gradient bg-dark-subtle p-2"},u={key:1,class:"row"},m=(0,s.Lk)("p",{class:"lead"},"Loading",-1),p=[m];function v(t,e,a,m,v,b){const f=(0,s.g2)("router-link"),g=(0,s.g2)("Card");return(0,s.uX)(),(0,s.CE)("div",n,[r,b.products?((0,s.uX)(),(0,s.CE)("div",l,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(b.products,(t=>((0,s.uX)(),(0,s.Wv)(g,{key:t.prodID},{cardHeader:(0,s.k6)((()=>[(0,s.Lk)("h4",d,(0,o.v_)(t.prodName),1)])),cardBody:(0,s.k6)((()=>[(0,s.Lk)("p",i," Quantity: "+(0,o.v_)(t.prodQuantity),1),(0,s.Lk)("p",c," Amount: R"+(0,o.v_)(t.prodAmount),1),(0,s.bF)(f,{to:{name:"product",params:{id:t.prodID}}},{default:(0,s.k6)((()=>[(0,s.eW)("View More")])),_:2},1032,["to"])])),_:2},1024)))),128))])):((0,s.uX)(),(0,s.CE)("div",u,p))])}const b={class:"card"},f={class:"card-header"},g=(0,s.Lk)("div",{class:"card-body"},null,-1);function h(t,e,a,o,n,r){return(0,s.uX)(),(0,s.CE)("div",b,[(0,s.Lk)("div",f,[(0,s.RG)(t.$slots,"cardHeader")]),g])}var k={name:"CardView"},L=a(1241);const w=(0,L.A)(k,[["render",h]]);var y=w,C={name:"ProductsView",components:{Card:y},computed:{products(){return this.$store.state.products}},mounted(){this.$store.dispatch("fetchProducts")}};const x=(0,L.A)(C,[["render",v]]);var S=x}}]);
//# sourceMappingURL=about.68f852e5.js.map