import React from 'react'
import listCardsStyle from "./ListCards.module.scss"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


function ListCards() {
  const { t } = useTranslation();

  return (
    <div className={listCardsStyle.container}>
      <div className={listCardsStyle.row}>
        <div className={listCardsStyle.lCol}>
          <div className={listCardsStyle.filter}>
            <p>{t("Filter")}</p>
            <img src="/img/filter.png" alt="filter png picture" />
            </div>
            <ul className={listCardsStyle.lists}>
              <li className={listCardsStyle.listItem}>
                <div>
                  {t("Tops")}
                  
                  </div>
                  </li>
              <li className={listCardsStyle.listItem}>
                <div>
                  
                  {t("Printed T-shirts")}
                  </div>
                  </li>
              <li className={listCardsStyle.listItem}>
                <div>
                  {t("Plain T-shirts")}
                  
                  </div>
                  </li>
              <li className={listCardsStyle.listItem}>
                <div>
                  {t("Kurti")}
                  
                  </div>
                  </li>
              <li className={listCardsStyle.listItem}>
                <div>
                  {t("Boxers")}
                  
                  </div>
                  </li>
              <li className={listCardsStyle.listItem}>
                <div>
                  {t("Full sleeve T-shirts")}
                  
                  </div>
                  </li>
              <li className={listCardsStyle.listItem}>
                <div>
                  {t("Joggers")}
                  
                  </div>
                  </li>
              <li className={listCardsStyle.listItem}>
                <div>
                  {t("Payjamas")}
                  
                  </div>
                  </li>
              <li className={listCardsStyle.listItem}>
                <div>
                  {t("Jeans")}
                  
                  </div>
                  </li>
            </ul>
        </div>
        <div className={listCardsStyle.rCol}>
          <div className={listCardsStyle.headCol}>
            <h6>{t("Women’s Clothing")}</h6>
            <div className={listCardsStyle.colHead}>
              <p className={listCardsStyle.new}>{t("New")}</p>
              <p className={listCardsStyle.recommend}>{t("Recommended")}</p>
            </div>
          </div>
          <div className={listCardsStyle.cards}>
            <Link to={''} className={listCardsStyle.card}>
              <img src="/img/CategoriesForWomen/img_1.png" alt="product card list image or picture" />
              <div className={listCardsStyle.cardContext}>
                <div>
              <p className={listCardsStyle.cardTitle}>{t("Black Sweatshirt with ....")}</p>
              <p className={listCardsStyle.cardSubtitle}>{t("Jhanvi’s  Brand")}</p>
                </div>
                <div className={listCardsStyle.cardPrice}>$123.00</div>
              </div>
            </Link>
            <Link to={''} className={listCardsStyle.card}>
              <img src="/img/CategoriesForWomen/img_2.png" alt="product card list image or picture" />
              <div className={listCardsStyle.cardContext}>
                <div>
              <p className={listCardsStyle.cardTitle}>{t("White T-shirt")}</p>
              <p className={listCardsStyle.cardSubtitle}>{t("Helen’s  Brand")}</p>
                </div>
                <div className={listCardsStyle.cardPrice}>$11.00</div>
              </div>
            </Link>
            <Link to={''} className={listCardsStyle.card}>
              <img src="/img/CategoriesForWomen/img_3.png" alt="product card list image or picture" />
              <div className={listCardsStyle.cardContext}>
                <div>
              <p className={listCardsStyle.cardTitle}>{t("Levender Hoodie with ....")}</p>
              <p className={listCardsStyle.cardSubtitle}>{t("Nike’s  Brand")}</p>
                </div>
                <div className={listCardsStyle.cardPrice}>$119.00</div>
              </div>
            </Link>
            <Link to={''} className={listCardsStyle.card}>
              <img src="/img/CategoriesForWomen/img_4.png" alt="product card list image or picture" />
              <div className={listCardsStyle.cardContext}>
                <div>
              <p className={listCardsStyle.cardTitle}>{t("Leaves Pattern White...")}</p>
              <p className={listCardsStyle.cardSubtitle}>{t("paypal’s  Brand")}</p>
                </div>
                <div className={listCardsStyle.cardPrice}>$77.00</div>
              </div>
            </Link>
            <Link to={''} className={listCardsStyle.card}>
              <img src="/img/CategoriesForWomen/img_5.png" alt="product card list image or picture" />
              <div className={listCardsStyle.cardContext}>
                <div>
              <p className={listCardsStyle.cardTitle}>{t("White Graphic Crop Top")}</p>
              <p className={listCardsStyle.cardSubtitle}>{t("woden’s  Brand")}</p>
                </div>
                <div className={listCardsStyle.cardPrice}>$29.00</div>
              </div>
            </Link>
            <Link to={''} className={listCardsStyle.card}>
              <img src="/img/CategoriesForWomen/img_6.png" alt="product card list image or picture" />
              <div className={listCardsStyle.cardContext}>
                <div>
              <p className={listCardsStyle.cardTitle}>{t("Black Shorts")}</p>
              <p className={listCardsStyle.cardSubtitle}>{t("MM’s  Brand")}</p>
                </div>
                <div className={listCardsStyle.cardPrice}>$37.00</div>
              </div>
            </Link>
            <Link to={''} className={listCardsStyle.card}>
              <img src="/img/CategoriesForWomen/img_7.png" alt="product card list image or picture" />
              <div className={listCardsStyle.cardContext}>
                <div>
              <p className={listCardsStyle.cardTitle}>{t("Barboreal Gray Sweats...")}</p>
              <p className={listCardsStyle.cardSubtitle}>{t("Priya’s  Brand")}</p>
                </div>
                <div className={listCardsStyle.cardPrice}>$77.00</div>
              </div>
            </Link>
            <Link to={''} className={listCardsStyle.card}>
              <img src="/img/CategoriesForWomen/img_8.png" alt="product card list image or picture" />
              <div className={listCardsStyle.cardContext}>
                <div>
              <p className={listCardsStyle.cardTitle}>{t("Yellow Sweatshirt")}</p>
              <p className={listCardsStyle.cardSubtitle}>{t("woden’s  Brand")}</p>
                </div>
                <div className={listCardsStyle.cardPrice}>$29.00</div>
              </div>
            </Link>
            <Link to={''} className={listCardsStyle.card}>
              <img src="/img/CategoriesForWomen/img_9.png" alt="product card list image or picture" />
              <div className={listCardsStyle.cardContext}>
                <div>
              <p className={listCardsStyle.cardTitle}>{t("Flower Pattern Black C...")}</p>
              <p className={listCardsStyle.cardSubtitle}>{t("MM’s  Brand")}</p>
                </div>
                <div className={listCardsStyle.cardPrice}>$37.00</div>
              </div>
            </Link>
            <Link to={''} className={listCardsStyle.card}>
              <img src="/img/CategoriesForWomen/img_10.png" alt="product card list image or picture" />
              <div className={listCardsStyle.cardContext}>
                <div>
              <p className={listCardsStyle.cardTitle}>{t("I Don’t Graphic T-shirt ")}</p>
              <p className={listCardsStyle.cardSubtitle}>{t("Nisargi’s  Brand")}</p>
                </div>
                <div className={listCardsStyle.cardPrice}>$77.00</div>
              </div>
            </Link>
            <Link to={''} className={listCardsStyle.card}>
              <img src="/img/CategoriesForWomen/img_11.png" alt="product card list image or picture" />
              <div className={listCardsStyle.cardContext}>
                <div>
              <p className={listCardsStyle.cardTitle}>{t("Blue Flower Print Crop ....")}</p>
              <p className={listCardsStyle.cardSubtitle}>{t("Mellon’s  Brand")}</p>
                </div>
                <div className={listCardsStyle.cardPrice}>$29.00</div>
              </div>
            </Link>
            <Link to={''} className={listCardsStyle.card}>
              <img src="/img/CategoriesForWomen/img_12.png" alt="product card list image or picture" />
              <div className={listCardsStyle.cardContext}>
                <div>
              <p className={listCardsStyle.cardTitle}>{t("line Pattern Black H...")}</p>
              <p className={listCardsStyle.cardSubtitle}>{t("AS’s  Brand")}</p>
                </div>
                <div className={listCardsStyle.cardPrice}>$37.00</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListCards
