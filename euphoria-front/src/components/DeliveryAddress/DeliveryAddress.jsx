import React from "react";
import { useTranslation } from "react-i18next";
import deliveryAddress from "./DeliveryAddress.module.scss";

function DeliveryAddress() {
  const { t } = useTranslation();
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    country: "",
    companyName: "",
    streetAddress: "",
    apt: "",
    city: "",
    state: "",
    phone: "",
    postalCode: "",
    deliveryInstruction: "",
  });

  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    country: false,
    streetAddress: false,
    city: false,
    state: false,
    phone: false,
    postalCode: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const validate = () => {
    return {
      firstName: !/^[A-Za-z]+$/.test(formValues.firstName),
      lastName: !/^[A-Za-z]+$/.test(formValues.lastName),
      country: !/^[A-Za-z\s]+$/.test(formValues.country),
      streetAddress: formValues.streetAddress.length === 0,
      city: !/^[A-Za-z\s]+$/.test(formValues.city),
      state: formValues.state.length === 0,
      phone: !/^\d{10}$/.test(formValues.phone),
      postalCode: !/^\d{5}$/.test(formValues.postalCode),
    };
  };

  const errors = validate();
  const isFormInvalid = Object.values(errors).some(error => error);

  return (
    <div className={deliveryAddress.container}>
      <div className={deliveryAddress.titlecontainer}>
        <h1 className={deliveryAddress.title}>{t("My Info")}</h1>
        <p className={deliveryAddress.subtitle}>{t("Add Address")}</p>
      </div>
      <div className={deliveryAddress.maincontainer}>
        <ul className={deliveryAddress.adressList}>
          <li className={deliveryAddress.listItem}>
            <div className={deliveryAddress.listContainer}>
              <div className={deliveryAddress.left}>
                <p>{t("First Name*")}</p>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.firstName && errors.firstName ? deliveryAddress.invalid : ""}
                  required
                />
              </div>
              <div className={deliveryAddress.right}>
                <p>{t("Last Name*")}</p>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.lastName && errors.lastName ? deliveryAddress.invalid : ""}
                  required
                />
              </div>
            </div>
          </li>
          <li className={deliveryAddress.listItem}>
            <div className={deliveryAddress.listContainer}>
              <div className={deliveryAddress.left}>
                <p>{t("Country / Region*")}</p>
                <input
                  type="text"
                  placeholder="Country / Region"
                  name="country"
                  value={formValues.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.country && errors.country ? deliveryAddress.invalid : ""}
                  required
                />
              </div>
              <div className={deliveryAddress.right}>
                <p>{t("Company Name")}</p>
                <input
                  type="text"
                  placeholder="Company (optional)"
                  name="companyName"
                  value={formValues.companyName}
                  onChange={handleChange}
                />
              </div>
            </div>
          </li>
          <li className={deliveryAddress.listItem}>
            <div className={deliveryAddress.listContainer}>
              <div className={deliveryAddress.left}>
                <p>{t("Street Address*")}</p>
                <input
                  type="text"
                  placeholder="House number and street name"
                  name="streetAddress"
                  value={formValues.streetAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.streetAddress && errors.streetAddress ? deliveryAddress.invalid : ""}
                  required
                />
              </div>
              <div className={deliveryAddress.right}>
                <p>{t("Apt, suite, unit (optional)")}</p>
                <input
                  type="text"
                  placeholder="apartment, suite, unit, etc. (optional)"
                  name="apt"
                  value={formValues.apt}
                  onChange={handleChange}
                />
              </div>
            </div>
          </li>
          <li className={deliveryAddress.listItem}>
            <div className={deliveryAddress.listContainer}>
              <div className={deliveryAddress.left}>
                <p>{t("City*")}</p>
                <input
                  type="text"
                  placeholder="Town / City"
                  name="city"
                  value={formValues.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.city && errors.city ? deliveryAddress.invalid : ""}
                  required
                />
              </div>
              <div className={deliveryAddress.right}>
                <p>{t("State*")}</p>
                <select
                  id="state"
                  name="state"
                  value={formValues.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.state && errors.state ? deliveryAddress.invalid : ""}
                  required
                >
                  <option value="">{t("State")}</option>
                  <option value="state1">{t("State1")}</option>
                  <option value="state2">{t("State2")}</option>
                  <option value="state3">{t("State3")}</option>
                </select>
              </div>
            </div>
          </li>
          <li className={deliveryAddress.listItem}>
            <div className={deliveryAddress.listContainer}>
              <div className={deliveryAddress.left}>
                <p>{t("Phone*")}</p>
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.phone && errors.phone ? deliveryAddress.invalid : ""}
                  required
                />
              </div>
              <div className={deliveryAddress.right}>
                <p>{t("Postal Code*")}</p>
                <input
                  type="text"
                  placeholder="Postal Code"
                  name="postalCode"
                  value={formValues.postalCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.postalCode && errors.postalCode ? deliveryAddress.invalid : ""}
                  required
                />
              </div>
            </div>
          </li>
          <li className={deliveryAddress.listItem}>
            <div className={deliveryAddress.listContainers}>
              <p>{t("Delivery Instruction")}</p>
              <textarea
                name="deliveryInstruction"
                id="txt"
                className={deliveryAddress.txt}
                placeholder="Delivery Instruction"
                value={formValues.deliveryInstruction}
                onChange={handleChange}
              ></textarea>
            </div>
          </li>
        </ul>
        <div className={deliveryAddress.chechkbox}>
          <div className={deliveryAddress.chck}>
            <input type="checkbox" name="defaultShipping" id="defaultShipping" />
            <p>{t("Set as default shipping address")}</p>
          </div>
          <div className={deliveryAddress.chck}>
            <input type="checkbox" name="defaultBilling" id="defaultBilling" />
            <p>{t("Set as default billing address")}</p>
          </div>
        </div>
        <div className={deliveryAddress.buttons}>
          <button
            className={`${deliveryAddress.btnSave} ${isFormInvalid ? deliveryAddress.btnSaveInvalid : ""}`}
            disabled={isFormInvalid}
          >
            {t("Save")}
          </button>
          <button className={deliveryAddress.btnCancel}>{t("Cancel")}</button>
        </div>
      </div>
    </div>
  );
}

export default DeliveryAddress;
