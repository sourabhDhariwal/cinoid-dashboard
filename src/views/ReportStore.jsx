import React from 'react';
import  { Component, Fragment } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody,Button } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import ReactDatatable from '@ashvin27/react-datatable';
import GetService from '../services/reserchPaper.js'
// import { css } from "@emotion/core";
import { ClipLoader } from "react-spinners";



class ReportStore extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeHandler =this.onChangeHandler.bind(this);  
    this.getReportListData = this.getReportListData.bind(this);
    
    this.columns = [
      {
        text: 'Publication Name',
        key: 'publication_name',
        className: "publication_name",
        align: "left",
        sortable: true,
      },
      {
        text: 'category Name',
        key: 'category_name',
        className: "category_name",
        align: "left",
        sortable: true,
      },
      {
        text: 'Sub Category Name',
        key: 'sub_category_name',
        className: "sub_category_name",
        align: "left",
        sortable: true,
      },
      {
        text: 'publisher Name',
        key: 'publisher_name',    
        className: "publication_name",
        align: "left",
        sortable: true,

      },
      {
        text: 'Publication Date',
        key: 'publication_date',
        className: "publication_date",
        align: "left",
        sortable: true,
      },
      {
        text: 'Publication Type',
        key: 'publication_type',
        className: "publication_type",
        align: "left",
        sortable: true,
      },
      {
        text: 'Country Name',
        key: 'country_name',
        className: "country_name",
        align: "left",
        sortable: true,
      },
      //  {
      //       key: "action",
      //       text: "Action",
      //       className: "action",
      //       width: 112,
      //       align: "left",
      //       sortable: false,
      //       cell: record => { 
      //           return (
      //               <Fragment>
      //                   <button
      //                       className="btn btn-primary btn-sm"
      //                       onClick={() => this.editRecord(record)}
      //                       style={{marginRight: '5px'}}>
      //                       <i className="fa fa-edit"></i>
      //                   </button>
      //                   <button 
      //                       className="btn btn-danger btn-sm" 
      //                       onClick={() => this.deleteRecord(record)}>
      //                       <i className="fa fa-trash"></i>
      //                   </button>
      //               </Fragment>
      //           );
      //       }
      //   }
    ];
    this.config = {
        page_size: 10,
        length_menu: [ 10, 20, 50 ],
        button: {
            // excel: true,
            // print: true,
            // extra: true,
        }
    }
    
    this.state = {
        records: [],
        filterPerams:{
          publisher_id:""
        },
        loading: false
    }
    // this.extraButtons =[
    //     {
    //         className:"btn btn-primary buttons-pdf",
    //         title:"Export TEst",
    //         children:[
    //             <span>
    //             <i className="glyphicon glyphicon-print fa fa-print" aria-hidden="true"></i>
    //             </span>
    //         ],
    //         onClick:(event)=>{
    //             console.log(event);
    //         },
    //     },
    //     {
    //         className:"btn btn-primary buttons-pdf",
    //         title:"Export TEst",
    //         children:[
    //             <span>
    //             <i className="glyphicon glyphicon-print fa fa-print" aria-hidden="true"></i>
    //             </span>
    //         ],
    //         onClick:(event)=>{
    //             console.log(event);
    //         },
    //         onDoubleClick:(event)=>{
    //             console.log("doubleClick")
    //         }
    //     },
    // ]
}

componentDidMount(){
  console.log(this.state.filterPerams)
  this.getReportListData()
  // console.log('returnObj------------',returnObj)
}

getReportListData(){
  GetService.getResearchList(this.state.filterPerams)
  .then(response =>{
    console.log("response.status=====", response)
    if(response.status){
      this.setState({records:response.listView})
    }else{
      this.setState({records:[]})
    }
  
  } 
    );
}
onChangeHandler=event=>{
      console.log(event.target.files[0])
      if((event.target.files[0])){
        this.setState({loading:true})
        GetService.insertReportData((event.target.files[0]))
        .then(response =>{
          console.log("upload status=====", response)
          if(response.status){
            this.setState({loading:false})
            this.getReportListData()
            alert(response.dispMessage)
          }else{
            alert(response.dispMessage  )
          }
        });
      }
  }

editRecord(record) {
    console.log("Edit Record", record);
}

deleteRecord(record) {
    console.log("Delete Record", record);
}
  
  render() {
    return (
      <Container fluid className="main-content-container px-4">
         {/* Page Header */}
    <Row noGutters className="page-header py-4">
    <PageTitle sm="4" title="Reports Store" subtitle="reports" className="text-sm-left" />
  </Row>

  {/* Default Light Table */}
  <Row>
    <Col >
 {/* <Button  for="files1" theme="primary"  className="mb-0">
      Import Report
      
    </Button> 
   */}

     <label for="files" theme="primary" style={{cursor:"pointer"}} >Click Here To Import Report  <ClipLoader
          size={20}
          //size={"150px"} this also works
          color={"#123abc"}
          loading={this.state.loading}
        /></label>
  <input id="files" style={{visibility:"hidden"}}  onChange={this.onChangeHandler} type="file"/>
    
    <hr/>
      <Card small className="mb-4">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Research Paper list</h6>
        </CardHeader>
        <CardBody className="p-0 pb-3 mt-3 ">
        <ReactDatatable
                    config={this.config}
                    records={this.state.records}
                    columns={this.columns}
                    extraButtons={this.extraButtons}
                />
          {/* <table className="table mb-0">
            <thead className="bg-light">
              <tr>
                <th scope="col" className="border-0">
                  #
                </th>
                <th scope="col" className="border-0">
                  First Name
                </th>
                <th scope="col" className="border-0">
                  Last Name
                </th>
                <th scope="col" className="border-0">
                  Country
                </th>
                <th scope="col" className="border-0">
                  City
                </th>
                <th scope="col" className="border-0">
                  Phone
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Ali</td>
                <td>Kerry</td>
                <td>Russian Federation</td>
                <td>Gdańsk</td>
                <td>107-0339</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Clark</td>
                <td>Angela</td>
                <td>Estonia</td>
                <td>Borghetto di Vara</td>
                <td>1-660-850-1647</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jerry</td>
                <td>Nathan</td>
                <td>Cyprus</td>
                <td>Braunau am Inn</td>
                <td>214-4225</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Colt</td>
                <td>Angela</td>
                <td>Liberia</td>
                <td>Bad Hersfeld</td>
                <td>1-848-473-7416</td>
              </tr>
            </tbody>
          </table> */}
        </CardBody>
      </Card>
    </Col>
  </Row>
</Container>
    );
  }
}

export default ReportStore;

