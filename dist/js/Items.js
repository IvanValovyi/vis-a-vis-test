const itemsList=[{label:"Lorem Ipsum is simply dummy text",text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",items:["Lorem Ipsum has been the industry's","Standard dummy text ever since","But also the leap into electronic typesetting"]},{label:"Lorem Ipsum is simply dummy text",text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",items:["Lorem Ipsum has been the industry's","Standard dummy text ever since","But also the leap into electronic typesetting","It was popularised in the 1960s"]},{label:"Lorem Ipsum is simply dummy text",text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",items:["Lorem Ipsum has been the industry's","Standard dummy text ever since","But also the leap into electronic typesetting"]},{label:"Lorem Ipsum is simply dummy text",text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",items:["Lorem Ipsum has been the industry's","Standard dummy text ever since","But also the leap into electronic typesetting"]},{label:"Lorem Ipsum is simply dummy text",text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",items:["Lorem Ipsum has been the industry's","Standard dummy text ever since","But also the leap into electronic typesetting"]}];export default Vue.component("vue-items",{template:'<div>\n\t\t\t\t\t\t <button v-on:click="count--">Thumbs Down</button>\n\t\t\t\t\t\t {{ count }}\n\t\t\t\t\t\t <button v-on:click="count++">Thumbs Up</button>\n\t\t\t\t\t</div>'});