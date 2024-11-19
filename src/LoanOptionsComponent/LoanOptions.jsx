import "../App.css";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Tab, Nav } from 'react-bootstrap';
import { Container, Row, Col } from "react-bootstrap";
import money from "../Assets/money.png";
import lifeinsurance from "../Assets/lifeinsurance.png";
import loan from "../Assets/loan.png";
import buyhome from "../Assets/buyhome.png";
import creditcard from "../Assets/creditcard.png";
import speedometer from "../Assets/speedometer.png";
import educationloan from "../Assets/education-loan.png";
import personalloanbullseye from "../Assets/personalloanbullseye.webp";
import creditcardsimg from "../Assets/credit-cards-img.webp";
import creditscoreimg from "../Assets/credit-score-img.webp";
import studentloansimg from "../Assets/student-loans-img.webp";
import homepurchaseimg from "../Assets/home-purchase-img.webp";
import insuranceimg from "../Assets/insurance-img.webp";
import autoloansimg from "../Assets/auto-loan-img.webp";

const LoanOptions = () => {
  const navigate = useNavigate();
  const [showComparison, setShowComparison] = useState(false);

  const handleCompareClick = () => {
    setShowComparison(true);  // Show the comparison section when clicked
  };
  return (
    <>
      <div className="site-heading">
        <h1 className="site-title">
          When options grow, <span className="site-title-span">You glow.</span>
        </h1>
      </div>


      <Container className="loan-option-container mt-0">
        <Tab.Container defaultActiveKey="personalLoans" >
          <div className="loan-box">
            <Row>
              <Col>
                <Nav className="justify-content-center loan-nav">
                  <Nav.Item>
                    <Nav.Link eventKey="personalLoans" className="text-center">
                      <img
                        src={money}
                        alt="Personal Loans"
                        className="loan-icon"
                      />
                      Personal Loans
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="studentLoan" className="text-center">
                      <img src={educationloan} alt="Student Loan" className="loan-icon" />
                      Student Loans
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="homePurchase" className="text-center">
                      <img src={buyhome} alt="Home Purchase" className="loan-icon" />
                      Home Purchase
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="creditCards" className="text-center">
                      <img src={creditcard} alt="Credit Cards" className="loan-icon" />
                      Credit Cards
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="insurance" className="text-center">
                      <img src={lifeinsurance} alt="Insurance" className="loan-icon" />
                      Insurance
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="autoLoans" className="text-center">
                      <img src={loan} alt="Auto Loans" className="loan-icon" />
                      Auto Loans
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="creditScore" className="text-center">
                      <img src={speedometer} alt="Credit Score" className="loan-icon" />
                      Credit Score
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </div>


          <div className="options-box-container">
            <Row className="mt-4">
              <Col>
                <Tab.Content>
                  {/* Box 1: Personal Loans */}
                  <Tab.Pane eventKey="personalLoans">
                    <div className="options-box">
                      <section className="options-content-section">
                        <header className="options-section-header">
                          <span className="text-muted personal">Personal Loans</span>
                        </header>
                        <h1 className="options-section-title">Find the perfect loan rate for your needs</h1>
                        <p className="options-section-description">
                        Whether you're looking to consolidate debt or finance a major purchase, we connect you with top lenders to help you compare personal loan options in just minutes.
                        </p>
                        <button onClick={() => navigate('/personal-loans')}
                          className="btn btn-primary btn-md options-compare-button"
                          aria-label="Compare personal loan rates">
                          Personal Loan</button>

                        <footer className="options-section-footer">
                          <p className="options-privacy-text">
                            <i className="bi bi-lock"></i> Privacy Secured | Advertising Disclosures
                          </p>
                        </footer>
                      </section>
                      <div className="options-image-section">
                        <img src={personalloanbullseye} alt="Targeting the right personal loan options" className="img-fluid" />
                      </div>
                    </div>
                  </Tab.Pane>

                  {/* Box 2: Student Loan */}
                  <Tab.Pane eventKey="studentLoan">
                    <div className="options-box">
                      <section className="options-content-section">
                        <header className="options-section-header">
                          <span className="text-muted personal">Student loans</span>
                        </header>
                        <h1 className="options-section-title">Pay for school the smart way.</h1>
                        <p className="options-section-description">
                        We simplify the process to help you compare various student loan options quickly, so you can make the best choice for your future in just a few minutes.</p>

                        <button onClick={() => navigate('/student-loans')}
                          className="btn btn-primary btn-md options-compare-button"
                          aria-label="Compare student loan rates">
                          Learn More</button>

                        <footer className="options-section-footer">
                          <p className="options-privacy-text">
                            <i className="bi bi-lock"></i> Privacy Secured | Advertising Disclosures
                          </p>
                        </footer>
                      </section>
                      <div className="options-image-section">
                        <img src={studentloansimg} alt="Targeting the right personal loan options" className="img-fluid" />
                      </div>
                    </div>
                  </Tab.Pane>

                  {/* Box 3: Home Purchase */}
                  <Tab.Pane eventKey="homePurchase">
                    <div className="options-box">
                      <section className="options-content-section">
                        <header className="options-section-header">
                          <span className="text-muted personal">Home Purchase</span>
                        </header>
                        <h1 className="options-section-title">Ready to buy your dream home?</h1>
                        <p className="options-section-description">
                        We make it easy to compare mortgage rates and find the best deal tailored to your needs, so you can start your homeownership journey with confidence.
                        </p>
                        <button onClick={() => navigate('/home-purchase')}
                          className="btn btn-primary btn-md options-compare-button"
                          aria-label="Compare home purchase loan rates">
                          Compare Rates</button>
                        <footer className="options-section-footer">
                          <p className="options-privacy-text">
                            <i className="bi bi-lock"></i> Privacy Secured | Advertising Disclosures
                          </p>
                        </footer>
                      </section>
                      <div className="options-image-section">
                        <img src={homepurchaseimg} alt="Targeting the right personal loan options" className="img-fluid" />
                      </div>
                    </div>
                  </Tab.Pane>

                  {/* Box 4: Credit Cards */}
                  <Tab.Pane eventKey="creditCards">
                    <div className="options-box">
                      <section className="options-content-section">
                        <header className="options-section-header">
                          <span className="text-muted personal">Credit Cards</span>
                        </header>
                        <h1 className="options-section-title">Find the best credit card offers</h1>
                        <p className="options-section-description">
                          Looking for a new credit card? Compare interest rates, rewards, and more from top credit card providers.
                        </p>

                        <button onClick={() => navigate('/credit-cards')}
                          className="btn btn-primary btn-md options-compare-button"
                          aria-label="Compare credit card offers">
                          Compare Credit Cards</button>


                        <footer className="options-section-footer">
                          <p className="options-privacy-text">
                            <i className="bi bi-lock"></i> Privacy Secured | Advertising Disclosures
                          </p>
                        </footer>
                      </section>
                      <div className="options-image-section">
                        <img src={creditcardsimg} alt="Targeting the right personal loan options" className="img-fluid" />
                      </div>
                    </div>
                  </Tab.Pane>

                  {/* Box 5: Insurance */}
                  <Tab.Pane eventKey="insurance">
                    <div className="options-box">
                      <section className="options-content-section">
                        <header className="options-section-header">
                          <span className="text-muted personal">Insurance</span>
                        </header>
                        <h1 className="options-section-title">Find the best insurance policy for you</h1>
                        <p className="options-section-description">
                          Need to insure your car, home, or health? Compare policies and find the best coverage options today.
                        </p>

                        <button onClick={() => navigate('/insurance')}
                          className="btn btn-primary btn-md options-compare-button"
                          aria-label="Compare insurance rates">
                          Learn More</button>


                        <footer className="options-section-footer">
                          <p className="options-privacy-text">
                            <i className="bi bi-lock"></i> Privacy Secured | Advertising Disclosures
                          </p>
                        </footer>
                      </section>
                      <div className="options-image-section">
                        <img src={insuranceimg} alt="Targeting the right personal loan options" className="img-fluid" />
                      </div>
                    </div>
                  </Tab.Pane>

                  {/* Box 6: Business Loans */}
                  <Tab.Pane eventKey="autoLoans">
                    <div className="options-box">
                      <section className="options-content-section">
                        <header className="options-section-header">
                          <span className="text-muted personal">Auto Loans</span>
                        </header>
                        <h1 className="options-section-title">Discover the right auto loan for you</h1>
                        <p className="options-section-description">
                          Take home the car you love. Compare auto loans to find the right fit for you.
                        </p>

                        <button onClick={() => navigate('/auto-loans')}
                          className="btn btn-primary btn-md options-compare-button"
                          aria-label="Compare Auto loan rates">
                          Compare Rates</button>

                        <footer className="options-section-footer">
                          <p className="options-privacy-text">
                            <i className="bi bi-lock"></i> Privacy Secured | Advertising Disclosures
                          </p>
                        </footer>
                      </section>
                      <div className="options-image-section">
                        <img src={autoloansimg} alt="Targeting the right personal loan options" className="img-fluid" />
                      </div>
                    </div>
                  </Tab.Pane>

                  {/* Box 7: Credit Score */}
                  <Tab.Pane eventKey="creditScore">
                    <div className="options-box">
                      <section className="options-content-section">
                        <header className="options-section-header">
                          <span className="text-muted personal">Credit Score</span>
                        </header>
                        <h1 className="options-section-title">Check your credit score for free</h1>
                        <p className="options-section-description">
                          Keep track of your credit score and take steps to improve it. Compare offers to help you build or repair your credit today.
                        </p>

                        <button onClick={() => navigate('/credit-score')}
                          className="btn btn-primary btn-md options-compare-button"
                          aria-label="Check credit score">
                          Check Score</button>

                        <footer className="options-section-footer">
                          <p className="options-privacy-text">
                            <i className="bi bi-lock"></i> Privacy Secured | Advertising Disclosures
                          </p>
                        </footer>
                      </section>
                      <div className="options-image-section">
                        <img src={creditscoreimg} alt="Targeting the right personal loan options" className="img-fluid" />
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </div>
        </Tab.Container>
      </Container>
      <hr className="divider" />
    </>
  );
};

export default LoanOptions;




