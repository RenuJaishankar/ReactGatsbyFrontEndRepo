import React from "react"
//import "./table.sass"
//import "./mystyles.scss"
import Majornavbar from "../components/majornavbar.js"
import Imgfruit from "../components/apple.png"
import Imgmajor from "../components/collegemajor.png"
import Imgbck from "../images/fruitimage.png"
import { graphql } from 'gatsby'
//import Newheading from "../components/NewHeading.js"
const newmajorpage = ({ data }) => (
  <div className="container" style={{backgroundImage:`url("https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252_960_720.jpg")`}}>

  
    <Majornavbar/>
    <div className="columns ">

      
      <div className="column is-one-quarter">
        <input id="Title" className="input" type="text" placeHolder="MAJOR"></input>

      </div>
      <div className="column is-one-quarter">
        <input id="Title" className="input" type="text" placeHolder="NUMBER OF KIDS"></input>

      </div>
      
      <div className= "column is-one-third">
        <button class="button" type="submit" >SUBMIT DETAILS</button>
      </div>

      </div>
        
        <table className="table is-bordered is-striped is-hoverable is-fullwidth" >
        <thead style = {{fontSize:20,fontFamily:"Lucida Sans"}}>
              TABLE WITH STUDENTS IN PARTICULAR MAJOR.
            </thead>

            <tbody>
              <tr>
              <th>
                  ID
                                </th>
                
                <th>
                  MAJOR
                                </th>

                <th>
                  NUMBER OF STUDENTS
                                </th>
                

              </tr>
              {data.java.majors.map(
                el => <tr>
                  <td>{el.id}</td>
                  <td>{el.major}</td>
                  <td>{el.noOfKids}</td>
                  
                </tr>

              )}

            </tbody>
        </table>
        <footer class="footer">
  <div className="level-left">
    <div className="level-item">
    <p>
    <img src="https://www.pngrepo.com/png/65101/180/books.png" width="50" height="50" />
    </p>
    </div>
  </div>
  
  <div className="level-right">
    <div className="level-item">
    <p>
    <img src="https://www.pngrepo.com/png/251994/180/books-book.png" width="50" height="50" />
    </p>
    </div>
  </div>

</footer>
    </div>
  

)
export const query = graphql`
query majorQuery {
  java{
  
    majors{
      id
      major
      noOfKids
      }   
      
 }
   
}
`
export default newmajorpage