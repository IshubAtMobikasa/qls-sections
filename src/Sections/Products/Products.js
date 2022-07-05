import React from "react";
import { Tab, Tabs, Container, Row, Col } from "react-bootstrap";
import ReactElasticCarousel from "react-elastic-carousel";
import Product from "./Product/Product";
import "./Products.scss";

const Products = () => {

  function getChunk (chunkSize, chunkData) {
    const groups = chunkData
      ?.map((e, i) => {
        return i % chunkSize === 0 ? chunkData?.slice(i, i + chunkSize) : null
      })
      .filter((e) => {
        return e
      })
    return groups
  }
  return (
    <div className="products py-5">
      <h1 className="py-3">BE <span>FIRST TO MARKET</span> WITH THESE HOT NEW PRODUCT</h1>
    <div className="product-desktop-view d-none d-lg-block">
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Filter">
          <Container>
            <Row className="gy-4">
            {
              Array(6).fill(null).map((item,i)=>(
                  <Col md={6} lg={4} key={i}>
                    <Product />
                  </Col>
              ))
            }
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="WiperBlades" title="Wiper Blades">
          <Container>
            <Row className="gy-4">
            {
              Array(6).fill(null).map((item,i)=>(
                  <Col md={6} lg={4} key={i}>
                    <Product />
                  </Col>
              ))
            }
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="Lighting" title="Lighting">
        <Container>
          <Row className="gy-4">
            {
              Array(6).fill(null).map((item,i)=>(
                  <Col md={6} lg={4} key={i}>
                    <Product />
                  </Col>
              ))
            }
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="Chemicals" title="Chemicals">
        <Container>
        <Row className="gy-4">
            {
              Array(6).fill(null).map((item,i)=>(
                  <Col md={6} lg={4} key={i}>
                    <Product />
                  </Col>
              ))
            }
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="Lubricant" title="Lubricant">
        <Container>
          <Row className="gy-4">
            {
              Array(6).fill(null).map((item,i)=>(
                  <Col md={6} lg={4} key={i}>
                    <Product />
                  </Col>
              ))
            }
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="TireService" title="Tire Service">
        <Container>
          <Row className="gy-4">
            
            {
              Array(6).fill(null).map((item,i)=>(
                  <Col md={6} lg={4} key={i}>
                    <Product />
                  </Col>
              ))
            }
           
          </Row>
          </Container>
        </Tab>
      </Tabs>
      </div>

      <div className="product-mobile-view d-block d-lg-none">
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Filter">
         
         
            <ReactElasticCarousel initialActiveIndex={0} verticalMode={false} itemsToShow={1} showArrows={false} >
           
            {getChunk(2,Array(10).fill(null)).map((sliced,i) => (
                <>
                          <div
                            className="w-75 slide-1 mb-1 d-flex justify-content-center flex-column"
                            key={i}
                          >

                            {sliced.map((p,i)=>(
                              <div className="main-wrapper mb-3">
                                <Product/>

                                </div>

                            ))
                            }
                          </div>

                </>
              
            ))

            }
            </ReactElasticCarousel>
           
            
        </Tab>
        <Tab eventKey="WiperBlades" title="Wiper Blades">
        <ReactElasticCarousel initialActiveIndex={0} verticalMode={false} itemsToShow={1} showArrows={false} >
           
           {getChunk(2,Array(10).fill(null)).map((sliced,i) => (
               <>
                         <div
                           className="w-75 slide-1 mb-1 d-flex justify-content-center flex-column"
                           key={i}
                         >

                           {sliced.map((p,i)=>(
                             <div className="main-wrapper mb-3">
                               <Product/>

                               </div>

                           ))
                           }
                         </div>

               </>
             
           ))

           }
           </ReactElasticCarousel>
        </Tab>
        <Tab eventKey="Lighting" title="Lighting">
        <ReactElasticCarousel initialActiveIndex={0} verticalMode={false} itemsToShow={1} showArrows={false} >
           
            {getChunk(2,Array(10).fill(null)).map((sliced,i) => (
                <>
                          <div
                            className="w-75 slide-1 mb-1 d-flex justify-content-center flex-column"
                            key={i}
                          >

                            {sliced.map((p,i)=>(
                              <div className="main-wrapper mb-3">
                                <Product/>

                                </div>

                            ))
                            }
                          </div>

                </>
              
            ))

            }
            </ReactElasticCarousel>
        </Tab>
        <Tab eventKey="Chemicals" title="Chemicals">
        <ReactElasticCarousel initialActiveIndex={0} verticalMode={false} itemsToShow={1} showArrows={false} >
           
            {getChunk(2,Array(10).fill(null)).map((sliced,i) => (
                <>
                          <div
                            className="w-75 slide-1 mb-1 d-flex justify-content-center flex-column"
                            key={i}
                          >

                            {sliced.map((p,i)=>(
                              <div className="main-wrapper mb-3">
                                <Product/>

                                </div>

                            ))
                            }
                          </div>

                </>
              
            ))

            }
            </ReactElasticCarousel>
        </Tab>
        <Tab eventKey="Lubricant" title="Lubricant">
        <ReactElasticCarousel initialActiveIndex={0} verticalMode={false} itemsToShow={1} showArrows={false} >
           
            {getChunk(2,Array(10).fill(null)).map((sliced,i) => (
                <>
                          <div
                            className="w-75 slide-1 mb-1 d-flex justify-content-center flex-column"
                            key={i}
                          >

                            {sliced.map((p,i)=>(
                              <div className="main-wrapper mb-3">
                                <Product/>

                                </div>

                            ))
                            }
                          </div>

                </>
              
            ))

            }
            </ReactElasticCarousel>
        </Tab>
        <Tab eventKey="TireService" title="Tire Service">
        <ReactElasticCarousel initialActiveIndex={0} verticalMode={false} itemsToShow={1} showArrows={false} >
           
            {getChunk(2,Array(10).fill(null)).map((sliced,i) => (
                <>
                          <div
                            className="w-75 slide-1 mb-1 d-flex justify-content-center flex-column"
                            key={i}
                          >

                            {sliced.map((p,i)=>(
                              <div className="main-wrapper mb-3">
                                <Product/>

                                </div>

                            ))
                            }
                          </div>

                </>
              
            ))

            }
            </ReactElasticCarousel>
        </Tab>
      </Tabs>
            
      </div>

    </div>
  );
};

export default Products;
