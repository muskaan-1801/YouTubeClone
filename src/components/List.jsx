import ListItem from "./ListItem";

const List = (props)=>{
  return (
    <> 
      {
        props.list.map((item,index)=>(
          <ListItem 
          myItem={item} 
          key={index}/>
        ))
      }
    </>
  );
};

export default List;