import React, { useState } from 'react'
import style from "./style.module.scss"
import { Link, useNavigate } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const data = [
    {
        imgUrl: "/img/OrderSummary/img1.png",
        productName: "Blue Flower Print Crop Top",
        count: 1,
        color: "Yellow",
        price: "29.00",
        salePrice: 10,
        shipping: 1
    },
    {
        imgUrl: "/img/OrderSummary/img2.png",
        productName: "Levender Hoodie",
        count: 2,
        color: "Levender",
        price: "119.00",
        salePrice: 5,
        shipping: 1
    },
    {
        imgUrl: "/img/OrderSummary/img3.png",
        productName: "Black Sweatshirt",
        count: 2,
        color: "Black",
        price: "123.00",
        salePrice: 5,
        shipping: 1
    },
]

function CheckoutComponent() {
    const { t } = useTranslation();
    const [error, setError] = useState("")
    const [useDifferentShippingAddress, setUseDifferentShippingAddress] = useState(false);
    const [usePaymentMethod, setUsePaymentMethod] = useState(true);

    async function handleSubmit(values) {
        try {
            console.log(values);

        } catch (err) {
            console.log(err);
        }
    }

    let subtotal = 0
    let savingPrice = 0
    let shippingPrice = 0
    let deliveryPrice = 0
    data.forEach((e) => {
        subtotal += e.count * e.price
        savingPrice += e.count * e.salePrice
        shippingPrice += e.count * e.shipping
        deliveryPrice += e.count * 1
    })

    let total = subtotal - savingPrice - shippingPrice

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/confirm-order')
        setTimeout(() => {
            navigate("/")
            window.location.reload(false);
        }, 4000);
    }

    return (
        <div className={style.checkout}>
            <div className={style.urlList}>
                <Link to={"/"}>{t("Home")} <img src="/img/arrow.png" alt="" /></Link>
                <Link to={"/my-account"}>{t("My Account")} <img src="/img/arrow.png" alt="" /></Link>
                <li>{t("Check Out")}</li>
            </div>
            <h2><div></div> {t("Check Out")}</h2>

            <div className={style.container}>
                <div className={style.billingDetails}>
                    <h3>{t("Billing Details")}</h3>
                    <Formik
                        initialValues={{ firstName: '', lastName: '', country: "", companyName: "", streetAddress: "", apt_suite_unit: "", city: "", state: '', postalCode: "", phone: "", saveInfo: false }}
                        validationSchema={Yup.object({
                            firstName: Yup.string().required("*"),
                            lastName: Yup.string().required("*"),
                            country: Yup.string().required("*"),
                            companyName: Yup.string(),
                            apt_suite_unit: Yup.string(),
                            streetAddress: Yup.string().required("*"),
                            city: Yup.string().required("*"),
                            state: Yup.string().required("*"),
                            postalCode: Yup.string().required("*"),
                            phone: Yup.string().required("*"),
                            saveInfo: Yup.boolean(),
                        })}
                        onSubmit={(values) => handleSubmit(values)}
                    >
                        {({ errors, touched }) => (
                            <Form className={style.formDiv}>
                                <div id={style.commonDiv}>
                                    <div id={style.left}>
                                        <label htmlFor="firstName">{t("First Name")}*</label>
                                        <Field className={`${style.inp} ${errors.firstName && touched.firstName && style.errorInp}`} name="firstName" type="text" placeholder="First Name" />
                                    </div>

                                    <div id={style.right}>
                                        <label htmlFor="lastName">{t("Last Name")}*</label>
                                        <Field className={`${style.inp} ${errors.lastName && touched.lastName && style.errorInp}`} name="lastName" type="text" placeholder="Last Name" />
                                    </div>
                                </div>

                                <div id={style.commonDiv}>
                                    <div id={style.left}>
                                        <label htmlFor="country">{t("Country / Region")}*</label>
                                        <Field className={`${style.inp} ${errors.country && touched.country && style.errorInp}`} name="country" type="text" placeholder="Country / Region" />
                                    </div>

                                    <div id={style.right}>
                                        <label htmlFor="company">{t("Company Name")}</label>
                                        <Field className={`${style.inp} ${errors.company && touched.company && style.errorInp}`} name="company" type="text" placeholder="Company (optional)" />
                                    </div>
                                </div>

                                <div id={style.commonDiv}>
                                    <div id={style.left}>
                                        <label htmlFor="streetAddress">{t("Street Address")}*</label>
                                        <Field className={`${style.inp} ${errors.streetAddress && touched.streetAddress && style.errorInp}`} name="streetAddress" type="text" placeholder="House number and street name" />
                                    </div>

                                    <div id={style.right}>
                                        <label htmlFor="apt_suite_unit">{t("Apt, suite, unit")}</label>
                                        <Field className={`${style.inp} ${errors.apt_suite_unit && touched.apt_suite_unit && style.errorInp}`} name="apt_suite_unit" type="text" placeholder="apartment, suite, unit, etc. (optional)" />
                                    </div>
                                </div>

                                <div id={style.commonDiv}>
                                    <div id={style.left}>
                                        <label htmlFor="city">{t("City")}*</label>
                                        <Field className={`${style.inp} ${errors.city && touched.city && style.errorInp}`} name="city" type="text" placeholder="Town / City" />
                                    </div>

                                    <div className={style.dropdown_container}>
                                        <label htmlFor="state">{t('State')}*</label>
                                        <Field as="select" name="state" id="state" className={`${style.dropdown_select} ${errors.state && touched.state && style.errorInp}`}>
                                            <option value="" disabled selected>{t('State')}</option>
                                            <option value="Azerbaijan">{t('Azerbaijan')}</option>
                                            <option value="Turkish">{t('Turkish')}</option>
                                            <option value="England">{t('England')}</option>
                                            <option value="Russia">{t('Russia')}</option>
                                            <option value="France">{t('France')}</option>
                                        </Field>
                                    </div>

                                    <div id={style.right}>
                                        <label htmlFor="postalCode">{t("Postal Code")}*</label>
                                        <Field className={`${style.inp} ${errors.postalCode && touched.postalCode && style.errorInp}`} name="postalCode" type="text" placeholder="Postal Code" />
                                    </div>
                                </div>

                                <div id={style.commonDiv}>
                                    <div id={style.left}>
                                        <label htmlFor="phone">{t("Phone")}*</label>
                                        <Field className={`${style.inp} ${errors.phone && touched.phone && style.errorInp}`} name="phone" type="number" placeholder="Phone" />
                                    </div>
                                </div>

                                {error ? <span className={style.errors} style={{ color: "#d91900" }}>{error}</span> : null}
                                <button id={style.submitbtn} type="submit">{t("Continue to delivery")}</button>

                                <div className={style.checkboxContainer}>
                                    <label>
                                        <Field type="checkbox" name="saveInfo" />
                                        {t("Save my information for a faster checkout")}
                                    </label>
                                </div>
                            </Form>
                        )}
                    </Formik>

                    <div className={style.shippingAddress}>
                        <h2>{t("Shipping Address")}</h2>
                        <p>{t("Select the address that matches your card or payment method.")}</p>

                        <div className={style.form}>
                            <div className={style.radioButtonContainer}>
                                <label htmlFor="sameAsBilling">
                                    <input
                                        type="radio"
                                        id="sameAsBilling"
                                        name="shippingOption"
                                        value="sameAsBilling"
                                        checked={!useDifferentShippingAddress}
                                        onChange={() => setUseDifferentShippingAddress(false)}
                                        className={style.radioButton}
                                    /> {t("Same as Billing address")}</label>
                            </div>
                            <hr />
                            <div className={style.radioButtonContainer}>
                                <label htmlFor="differentShipping">
                                    <input
                                        type="radio"
                                        id="differentShipping"
                                        name="shippingOption"
                                        value="differentShipping"
                                        checked={useDifferentShippingAddress}
                                        onChange={() => setUseDifferentShippingAddress(true)}
                                        className={style.radioButton}
                                    />{t("Use a different shipping address")}</label>
                            </div>
                            {useDifferentShippingAddress && (
                                <div className={style.inputContainer}>
                                    <label htmlFor="shippingAddress" className={style.inputLabel}>{t("Shipping Address:")}</label>
                                    <input type="text" id="shippingAddress" name="shippingAddress" className={style.inputField} />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className={style.shippingMethod}>
                        <h2>{t("Shipping Method")}</h2>
                        <div className={style.content}>
                            <h3>Arrives by Monday, June 7</h3>
                            <hr />
                            <div>
                                <h3>{t("Delivery Charges")} <span>${deliveryPrice}.00</span></h3>
                                <p>{t("Additional fess may apply")}</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.paymentMethod}>
                        <h2>{t("Payment Method")}</h2>
                        <p>{t("All transactions are secure and encrypted.")}</p>

                        <div className={style.form}>
                            <div className={style.radioButtonContainer}>
                                <label htmlFor="creditCard">
                                    <input
                                        type="radio"
                                        id="creditCard"
                                        name="paymentMethod"
                                        value="creditCard"
                                        checked={usePaymentMethod}
                                        onChange={() => setUsePaymentMethod(true)}
                                        className={style.radioButton}
                                    />{t("Credit Card")}</label>
                                <p>{t("We accept all major credit cards.")}</p>
                            </div>
                            {usePaymentMethod && (
                                <div className={style.cardDetail}>
                                    <div className={style.cardType}>
                                        <img src="/img/CardType/GPay.png" alt="" />
                                        <img src="/img/CardType/VISA.png" alt="" />
                                        <img src="/img/CardType/PayPal.png" alt="" />
                                        <img src="/img/CardType/PayPass.png" alt="" />
                                    </div>

                                    <div className={style.cardForm}>
                                        <div className={style.inps}>
                                            <input type="number" placeholder='Card number' />
                                            <input type="text" placeholder='Name of card' />
                                        </div>
                                        <div className={style.inps}>
                                            <input type="date" placeholder='Expiration date (MM/YY)' />
                                            <input type="number" placeholder='Security Code' />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <hr />
                            <div className={style.radioButtonContainer}>
                                <label htmlFor="cashOnDelivery">
                                    <input
                                        type="radio"
                                        id="cashOnDelivery"
                                        name="paymentMethod"
                                        value="cashOnDelivery"
                                        checked={!usePaymentMethod}
                                        onChange={() => setUsePaymentMethod(false)}
                                        className={style.radioButton}
                                    /> {t("Cash on delivery")}</label>
                                <p>{t("Pay with cash upon delivery.")}</p>
                            </div>
                            <hr />
                            <div className={style.radioButtonContainer}>
                                <label htmlFor="paypal">
                                    <input
                                        type="radio"
                                        id="paypal"
                                        name="paymentMethod"
                                        value="paypal"
                                        checked={!usePaymentMethod}
                                        onChange={() => setUsePaymentMethod(false)}
                                        className={style.radioButton}
                                    /> {t("PayPal")}</label>
                            </div>
                        </div>
                    </div>

                    <button onClick={handleClick}>{t("Pay Now")}</button>
                </div>

                <div className={style.orderSummary}>
                    <h3>{t("Order Summary")}</h3>

                    <div className={style.orderDiv}>
                        {data.map((product, i) =>
                            <div className={style.product} key={i}>
                                <img src={product.imgUrl} alt="" />
                                <div className={style.text}>
                                    <h4>{product.productName} <span> x {product.count}</span></h4>
                                    <h4>{t("Color")} <span>{product.color}</span></h4>
                                </div>
                                <h5>${product.price}</h5>
                            </div>
                        )}

                        <div className={style.text}>
                            <h4>{t("Subtotal")} <span>( {data.length} {t("items")} )</span></h4>
                            <h4>${subtotal}.00</h4>
                        </div>
                        <div className={style.text}>
                            <h4>{t("Savings")}</h4>
                            <h4>-${savingPrice}.00</h4>
                        </div>

                        <div className={style.shipping}>
                            <h4>{t("Shipping")}</h4>
                            <h4>-${shippingPrice}.00</h4>
                        </div>

                        <div className={style.text}>
                            <h4>{t("Total")}</h4>
                            <h4>${total}.00</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutComponent;