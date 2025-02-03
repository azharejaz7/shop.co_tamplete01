

export default {
  name: "name",
  title: "Products",
  type: "document",
  fields: [{ name: "name", title: "Product Name", type: "string" },
    {name:"image",title:"Product Image",type:"image",options:{hotspot:true},},
    {name:"price",title:"Price",type:"number", validation: (Rule) => Rule.min(0),},
    {name:"discountedPrice",title:"Discounted Price",type:"number", validation: (Rule) => Rule.min(0),},
    {name:"rating", title:"Rating",type:"object", fields:[{name:"stars",title:"Stars",type:"number", description:"Rating in stars (e.g., 4.5)",validation:(Rule)=>Rule.min(0).max(5),}]},
    {name:"score",title:"Score",type:"string",description:"Displayed rating score (e.g., '4.5/5')"},
    {name:"slug",type:"slug",title:"Slug"}
  ],
};
