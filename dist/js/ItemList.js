const itemsList=[{label:"Lorem Ipsum is simply dummy text",text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",items:["Lorem Ipsum has been the industry's","Standard dummy text ever since","But also the leap into electronic typesetting"]},{label:"Lorem Ipsum is simply dummy text",text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",items:["Lorem Ipsum has been the industry's","Standard dummy text ever since","But also the leap into electronic typesetting","It was popularised in the 1960s"]},{label:"Lorem Ipsum is simply dummy text",text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",items:["Lorem Ipsum has been the industry's","Standard dummy text ever since","But also the leap into electronic typesetting"]},{label:"Lorem Ipsum is simply dummy text",text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",items:["Lorem Ipsum has been the industry's","Standard dummy text ever since","But also the leap into electronic typesetting"]},{label:"Lorem Ipsum is simply dummy text",text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",items:["Lorem Ipsum has been the industry's","Standard dummy text ever since","But also the leap into electronic typesetting"]}];function shuffle(e){let t,a=e.length;for(;0!=a;)t=Math.floor(Math.random()*a),a--,[e[a],e[t]]=[e[t],e[a]];return e}export default Vue.component("vue-item-list",{data:()=>({itemsList:shuffle(itemsList)}),template:'\n\t<div class="list">\n\t\t<vue-item v-for="(item, index) in itemsList" :key="item.message" :item="item" :index="index"></vue-item>\n\t</div>\n\t'});