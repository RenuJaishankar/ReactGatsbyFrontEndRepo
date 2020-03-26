import React from "react"
import "./mystyles.scss"
import "./table.sass"
import Fruitnavbar from "../components/fruitnavbar.js"
import Imgfruit from "../components/apple.png"
import Imgbck from "../images/fruitimage.png"
import { graphql } from 'gatsby'
//import Newheading from "../components/NewHeading.js"
const newtest = ({ data }) => (
  <div className="container" style={{backgroundImage:`url("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg")`}}>

  
    <Fruitnavbar/>
    <div className="columns">

      <div className="column is-one-quarter">
        <input id="Title" className="input" type="text" placeHolder="FRUIT ID"></input>

      </div>
      <div className="column is-one-quarter">
        <input id="Title" className="input" type="text" placeHolder="NAME"></input>

      </div>
      <div className="column">
        <input id="Title" className="input" type="text" placeHolder="STATE"></input>

      </div>
      <div className="column is-one-quarter">
        <input id="Title" className="input" type="text" placeHolder="COLOR"></input>

      </div>
      <div className= "column is-one-quarter">
        <button class="button" type="submit" >SUBMIT FRUIT</button>
      </div>

      </div>
        
        <table className="table is-bordered table is-striped is-hoverable is-fullwidth" >
        <thead style = {{fontSize:20,fontFamily:"Lucida Sans"}}>
              FRUIT TABLE 
            </thead>

            <tbody>
              <tr>
                <th>
                  ID
                                </th>
                <th>
                  NAME
                                </th>

                <th>
                  STATE
                                </th>
                <th>
                  COLOR
                                </th>

              </tr>
              {data.java.fruits.map(
                el => <tr>
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.state}</td>
                  <td>{el.color}</td>

                </tr>

              )}

            </tbody>
        </table>
        <footer class="footer">
  <div className="level-left">
    <div className="level-item">
    <p>
    <img src="https://www.pngrepo.com/png/42210/180/grapes.png" width="50" height="50" />
    </p>
    </div>
  </div>
  
  <div className="level-right">
    <div className="level-item">
    <p>
    <img src="https://www.pngrepo.com/png/16479/180/pineapple.png" width="50" height="50" />
    </p>
    </div>
  </div>

</footer>
      
    </div>
  

)
export const query = graphql`
query MyQuery {
  java{
  
    fruits{
      id
      name
      state
      color
      }   
      
 }
   
}
`
export default newtest