import React from "react";
import listCardsStyle from "./ListCards.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Filter from "../../Filter/Filter";

function ListCards() {
  const { t } = useTranslation();

  return (
    <div className={listCardsStyle.container}>
      <div className={listCardsStyle.row}>
        <Filter/>
        {/* <div className={listCardsStyle.lCol}>
          <div className={listCardsStyle.filter}>
            <p>{t("Filter")}</p>
            <img src="/img/filter.png" alt="filter png picture" />
          </div>
          <ul className={listCardsStyle.lists}>
            <li className={listCardsStyle.listItem}>
              <div className={listCardsStyle.diV}>
                {t("Tops")}
                <img src="/img/rightIcon.png" alt="right icon png" />
              </div>
            </li>
            <li className={listCardsStyle.listItem}>
              <div className={listCardsStyle.diV}>
                {t("Printed T-shirts")}
                <img src="/img/rightIcon.png" alt="right icon png" />
              </div>
            </li>
            <li className={listCardsStyle.listItem}>
              <div className={listCardsStyle.diV}>
                {t("Plain T-shirts")}
                <img src="/img/rightIcon.png" alt="right icon png" />
              </div>
            </li>
            <li className={listCardsStyle.listItem}>
              <div className={listCardsStyle.diV}>
                {t("Kurti")}
                <img src="/img/rightIcon.png" alt="right icon png" />
              </div>
            </li>
            <li className={listCardsStyle.listItem}>
              <div className={listCardsStyle.diV}>
                {t("Boxers")}
                <img src="/img/rightIcon.png" alt="right icon png" />
              </div>
            </li>
            <li className={listCardsStyle.listItem}>
              <div className={listCardsStyle.diV}>
                {t("Full sleeve T-shirts")}
                <img src="/img/rightIcon.png" alt="right icon png" />
              </div>
            </li>
            <li className={listCardsStyle.listItem}>
              <div className={listCardsStyle.diV}>
                {t("Joggers")}
                <img src="/img/rightIcon.png" alt="right icon png" />
              </div>
            </li>
            <li className={listCardsStyle.listItem}>
              <div className={listCardsStyle.diV}>
                {t("Payjamas")}
                <img src="/img/rightIcon.png" alt="right icon png" />
              </div>
            </li>
            <li className={listCardsStyle.listItem}>
              <div className={listCardsStyle.diV}>
                {t("Jeans")}
                <img src="/img/rightIcon.png" alt="right icon png" />
              </div>
            </li>
          </ul>
          <div className={listCardsStyle.price}>
            <p>{t("Price")}</p>
            <img src="/img/upIcon.png" alt="up Icon" />
          </div>
          <div className={listCardsStyle.priceOpen}>
            <div className={listCardsStyle.priceLine}>
              <div className={listCardsStyle.circle1}></div>
              <div className={listCardsStyle.lines}>
                <div className={listCardsStyle.pline}></div>
              </div>
              <div className={listCardsStyle.circle2}></div>
            </div>
            <div className={listCardsStyle.priceCom}>
              <div className={listCardsStyle.priceContext}>{t("$70")}</div>
              <div className={listCardsStyle.priceContext}>{t("$600")}</div>
            </div>
          </div>
          <div className={listCardsStyle.color}>
            <p>{t("Colors")}</p>
            <img src="/img/upIcon.png" alt="up Icon" />
          </div>
          <div className={listCardsStyle.colors}>
            <ul className={listCardsStyle.colorList}>
              <li className={listCardsStyle.colorItem}>
                <div className={listCardsStyle.colorContext}>
                  <div className={listCardsStyle.color1}></div>
                  <p>{t("Purple")}</p>
                </div>
              </li>
              <li className={listCardsStyle.colorItem}>
                <div className={listCardsStyle.colorContext}>
                  <div className={listCardsStyle.color2}></div>
                  <p>{t("Black")}</p>
                </div>
              </li>
              <li className={listCardsStyle.colorItem}>
                <div className={listCardsStyle.colorContext}>
                  <div className={listCardsStyle.color3}></div>
                  <p>{t("Red")}</p>
                </div>
              </li>
              <li className={listCardsStyle.colorItem}>
                <div className={listCardsStyle.colorContext}>
                  <div className={listCardsStyle.color4}></div>
                  <p>{t("Orange")}</p>
                </div>
              </li>
              <li className={listCardsStyle.colorItem}>
                <div className={listCardsStyle.colorContext}>
                  <div className={listCardsStyle.color5}></div>
                  <p>{t("Navy")}</p>
                </div>
              </li>
              <li className={listCardsStyle.colorItem}>
                <div className={listCardsStyle.colorContext}>
                  <div className={listCardsStyle.color6}></div>
                  <p>{t("White")}</p>
                </div>
              </li>
              <li className={listCardsStyle.colorItem}>
                <div className={listCardsStyle.colorContext}>
                  <div className={listCardsStyle.color7}></div>
                  <p>{t("Broom")}</p>
                </div>
              </li>
              <li className={listCardsStyle.colorItem}>
                <div className={listCardsStyle.colorContext}>
                  <div className={listCardsStyle.color8}></div>
                  <p>{t("Green")}</p>
                </div>
              </li>
              <li className={listCardsStyle.colorItem}>
                <div className={listCardsStyle.colorContext}>
                  <div className={listCardsStyle.color9}></div>
                  <p>{t("Yellow")}</p>
                </div>
              </li>
              <li className={listCardsStyle.colorItem}>
                <div className={listCardsStyle.colorContext}>
                  <div className={listCardsStyle.color10}></div>
                  <p>{t("Grey")}</p>
                </div>
              </li>
              <li className={listCardsStyle.colorItem}>
                <div className={listCardsStyle.colorContext}>
                  <div className={listCardsStyle.color11}></div>
                  <p>{t("Pink")}</p>
                </div>
              </li>
              <li className={listCardsStyle.colorItem}>
                <div className={listCardsStyle.colorContext}>
                  <div className={listCardsStyle.color12}></div>
                  <p>{t("Blue")}</p>
                </div>
              </li>
            </ul>
          </div>
          <div className={listCardsStyle.size}>
            <p>{t("Size")}</p>
            <img src="/img/upIcon.png" alt="up Icon" />
          </div>
          <div className={listCardsStyle.sizes}>
            <ul className={listCardsStyle.sizeList}>
              <li className={listCardsStyle.sizeItem}>
                <div className={listCardsStyle.sizeContext}>
                  <div className={listCardsStyle.size1}>{t("XXS")}</div>
                </div>
              </li>
              <li className={listCardsStyle.sizeItem}>
                <div className={listCardsStyle.sizeContext}>
                  <div className={listCardsStyle.size2}>{t("XL")}</div>
                </div>
              </li>
              <li className={listCardsStyle.sizeItem}>
                <div className={listCardsStyle.sizeContext}>
                  <div className={listCardsStyle.size3}>{t("XS")}</div>
                </div>
              </li>
              <li className={listCardsStyle.sizeItem}>
                <div className={listCardsStyle.sizeContext}>
                  <div className={listCardsStyle.size4}>{t("S")}</div>
                </div>
              </li>
              <li className={listCardsStyle.sizeItem}>
                <div className={listCardsStyle.sizeContext}>
                  <div className={listCardsStyle.size5}>{t("M")}</div>
                </div>
              </li>
              <li className={listCardsStyle.sizeItem}>
                <div className={listCardsStyle.sizeContext}>
                  <div className={listCardsStyle.size6}>{t("L")}</div>
                </div>
              </li>
              <li className={listCardsStyle.sizeItem}>
                <div className={listCardsStyle.sizeContext}>
                  <div className={listCardsStyle.size7}>{t("XXL")}</div>
                </div>
              </li>
              <li className={listCardsStyle.sizeItem}>
                <div className={listCardsStyle.sizeContext}>
                  <div className={listCardsStyle.size8}>{t("3XL")}</div>
                </div>
              </li>
              <li className={listCardsStyle.sizeItem}>
                <div className={listCardsStyle.sizeContext}>
                  <div className={listCardsStyle.size9}>{t("4XL")}</div>
                </div>
              </li>
            </ul>
          </div>
          <div className={listCardsStyle.style}>
            <p>{t("Dress Style")}</p>
            <img src="/img/upIcon.png" alt="up Icon" />
          </div>
          <ul className={listCardsStyle.styleLists}>
            <li className={listCardsStyle.listItem}>
              <div className={listCardsStyle.diV}>
                {t("Classic")}
                <img src="/img/rightIcon.png" alt="right icon png" />
              </div>
            </li>
            <li className={listCardsStyle.listItem}>
              <div className={listCardsStyle.diV}>
                {t("Casual")}
                <img src="/img/rightIcon.png" alt="right icon png" />
              </div>
            </li>
            <li className={listCardsStyle.listItem}>
              <div className={listCardsStyle.diV}>
                {t("Business")}
                <img src="/img/rightIcon.png" alt="right icon png" />
              </div>
            </li>
            <li className={listCardsStyle.listItem}>
              <div className={listCardsStyle.diV}>
                {t("Sport")}
                <img src="/img/rightIcon.png" alt="right icon png" />
              </div>
            </li>
            <li className={listCardsStyle.listItem}>
              <div className={listCardsStyle.diV}>
                {t("Elegant")}
                <img src="/img/rightIcon.png" alt="right icon png" />
              </div>
            </li>
            <li className={listCardsStyle.listItem}>
              <div className={listCardsStyle.diV}>
                {t("Formal (evening)")}
                <img src="/img/rightIcon.png" alt="right icon png" />
              </div>
            </li>
          </ul>
        </div> */}
        <div className={listCardsStyle.rCol}>
          <div className={listCardsStyle.headCol}>
            <h6>{t("Women’s Clothing")}</h6>
            <div className={listCardsStyle.colHead}>
              <p className={listCardsStyle.new}>{t("New")}</p>
              <p className={listCardsStyle.recommend}>{t("Recommended")}</p>
            </div>
          </div>
          <div className={listCardsStyle.cards}>
            <div className={listCardsStyle.card}>
            <div className={listCardsStyle.heart}>
              <img src="/img/heartIcon.png" alt="heart icon png" />
            </div>
            <Link to={"/"} className={listCardsStyle.card}>
              <div className={listCardsStyle.heart}>
                <img src="/img/heartIcon.png" alt="heart icon png" />
              </div>
              <img
                src="/img/CategoriesForWomen/img_1.png"
                alt="product card list image or picture"
              />
              </Link>
              <div className={listCardsStyle.cardContext}>
                <div>
                  <p className={listCardsStyle.cardTitle}>
                    {t("Black Sweatshirt with ....")}
                  </p>
                  <p className={listCardsStyle.cardSubtitle}>
                    {t("Jhanvi’s  Brand")}
                  </p>
                </div>
                <div className={listCardsStyle.cardPrice}>$123.00</div>
              </div>
            </div>
            <Link to={"/"} className={listCardsStyle.card}>
              <div className={listCardsStyle.heart}>
                <img src="/img/heartIcon.png" alt="heart icon png" />
              </div>
              <img
                src="/img/CategoriesForWomen/img_2.png"
                alt="product card list image or picture"
              />
              <div className={listCardsStyle.cardContext}>
                <div>
                  <p className={listCardsStyle.cardTitle}>
                    {t("White T-shirt")}
                  </p>
                  <p className={listCardsStyle.cardSubtitle}>
                    {t("Helen’s  Brand")}
                  </p>
                </div>
                <div className={listCardsStyle.cardPrice}>$11.00</div>
              </div>
            </Link>
            <Link to={"/"} className={listCardsStyle.card}>
              <div className={listCardsStyle.heart}>
                <img src="/img/heartIcon.png" alt="heart icon png" />
              </div>
              <img
                src="/img/CategoriesForWomen/img_3.png"
                alt="product card list image or picture"
              />
              <div className={listCardsStyle.cardContext}>
                <div>
                  <p className={listCardsStyle.cardTitle}>
                    {t("Levender Hoodie with ....")}
                  </p>
                  <p className={listCardsStyle.cardSubtitle}>
                    {t("Nike’s  Brand")}
                  </p>
                </div>
                <div className={listCardsStyle.cardPrice}>$119.00</div>
              </div>
            </Link>
            <Link to={"/"} className={listCardsStyle.card}>
              <div className={listCardsStyle.heart}>
                <img src="/img/heartIcon.png" alt="heart icon png" />
              </div>
              <img
                src="/img/CategoriesForWomen/img_4.png"
                alt="product card list image or picture"
              />
              <div className={listCardsStyle.cardContext}>
                <div>
                  <p className={listCardsStyle.cardTitle}>
                    {t("Leaves Pattern White...")}
                  </p>
                  <p className={listCardsStyle.cardSubtitle}>
                    {t("paypal’s  Brand")}
                  </p>
                </div>
                <div className={listCardsStyle.cardPrice}>$77.00</div>
              </div>
            </Link>
            <Link to={"/"} className={listCardsStyle.card}>
              <div className={listCardsStyle.heart}>
                <img src="/img/heartIcon.png" alt="heart icon png" />
              </div>
              <img
                src="/img/CategoriesForWomen/img_5.png"
                alt="product card list image or picture"
              />
              <div className={listCardsStyle.cardContext}>
                <div>
                  <p className={listCardsStyle.cardTitle}>
                    {t("White Graphic Crop Top")}
                  </p>
                  <p className={listCardsStyle.cardSubtitle}>
                    {t("woden’s  Brand")}
                  </p>
                </div>
                <div className={listCardsStyle.cardPrice}>$29.00</div>
              </div>
            </Link>
            <Link to={"/"} className={listCardsStyle.card}>
              <div className={listCardsStyle.heart}>
                <img src="/img/heartIcon.png" alt="heart icon png" />
              </div>
              <img
                src="/img/CategoriesForWomen/img_6.png"
                alt="product card list image or picture"
              />
              <div className={listCardsStyle.cardContext}>
                <div>
                  <p className={listCardsStyle.cardTitle}>
                    {t("Black Shorts")}
                  </p>
                  <p className={listCardsStyle.cardSubtitle}>
                    {t("MM’s  Brand")}
                  </p>
                </div>
                <div className={listCardsStyle.cardPrice}>$37.00</div>
              </div>
            </Link>
            <Link to={"/"} className={listCardsStyle.card}>
              <div className={listCardsStyle.heart}>
                <img src="/img/heartIcon.png" alt="heart icon png" />
              </div>
              <img
                src="/img/CategoriesForWomen/img_7.png"
                alt="product card list image or picture"
              />
              <div className={listCardsStyle.cardContext}>
                <div>
                  <p className={listCardsStyle.cardTitle}>
                    {t("Barboreal Gray Sweats...")}
                  </p>
                  <p className={listCardsStyle.cardSubtitle}>
                    {t("Priya’s  Brand")}
                  </p>
                </div>
                <div className={listCardsStyle.cardPrice}>$77.00</div>
              </div>
            </Link>
            <Link to={"/"} className={listCardsStyle.card}>
              <div className={listCardsStyle.heart}>
                <img src="/img/heartIcon.png" alt="heart icon png" />
              </div>
              <img
                src="/img/CategoriesForWomen/img_8.png"
                alt="product card list image or picture"
              />
              <div className={listCardsStyle.cardContext}>
                <div>
                  <p className={listCardsStyle.cardTitle}>
                    {t("Yellow Sweatshirt")}
                  </p>
                  <p className={listCardsStyle.cardSubtitle}>
                    {t("woden’s  Brand")}
                  </p>
                </div>
                <div className={listCardsStyle.cardPrice}>$29.00</div>
              </div>
            </Link>
            <Link to={"/"} className={listCardsStyle.card}>
              <div className={listCardsStyle.heart}>
                <img src="/img/heartIcon.png" alt="heart icon png" />
              </div>
              <img
                src="/img/CategoriesForWomen/img_9.png"
                alt="product card list image or picture"
              />
              <div className={listCardsStyle.cardContext}>
                <div>
                  <p className={listCardsStyle.cardTitle}>
                    {t("Flower Pattern Black C...")}
                  </p>
                  <p className={listCardsStyle.cardSubtitle}>
                    {t("MM’s  Brand")}
                  </p>
                </div>
                <div className={listCardsStyle.cardPrice}>$37.00</div>
              </div>
            </Link>
            <Link to={"/"} className={listCardsStyle.card}>
              <div className={listCardsStyle.heart}>
                <img src="/img/heartIcon.png" alt="heart icon png" />
              </div>
              <img
                src="/img/CategoriesForWomen/img_10.png"
                alt="product card list image or picture"
              />
              <div className={listCardsStyle.cardContext}>
                <div>
                  <p className={listCardsStyle.cardTitle}>
                    {t("I Don’t Graphic T-shirt ")}
                  </p>
                  <p className={listCardsStyle.cardSubtitle}>
                    {t("Nisargi’s  Brand")}
                  </p>
                </div>
                <div className={listCardsStyle.cardPrice}>$77.00</div>
              </div>
            </Link>
            <Link to={"/"} className={listCardsStyle.card}>
              <div className={listCardsStyle.heart}>
                <img src="/img/heartIcon.png" alt="heart icon png" />
              </div>
              <img
                src="/img/CategoriesForWomen/img_11.png"
                alt="product card list image or picture"
              />
              <div className={listCardsStyle.cardContext}>
                <div>
                  <p className={listCardsStyle.cardTitle}>
                    {t("Blue Flower Print Crop ....")}
                  </p>
                  <p className={listCardsStyle.cardSubtitle}>
                    {t("Mellon’s  Brand")}
                  </p>
                </div>
                <div className={listCardsStyle.cardPrice}>$29.00</div>
              </div>
            </Link>
            <Link to={"/"} className={listCardsStyle.card}>
              <img
                src="/img/CategoriesForWomen/img_12.png"
                alt="product card list image or picture"
              />
              <div className={listCardsStyle.cardContext}>
                <div>
                  <p className={listCardsStyle.cardTitle}>
                    {t("line Pattern Black H...")}
                  </p>
                  <p className={listCardsStyle.cardSubtitle}>
                    {t("AS’s  Brand")}
                  </p>
                </div>
                <div className={listCardsStyle.cardPrice}>$37.00</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCards;
