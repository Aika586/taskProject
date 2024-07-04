import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { useMediaQuery } from "react-responsive";
import { Button, ConfigProvider, Menu } from "antd";
import { LoginOutlined, UserOutlined } from "@ant-design/icons";

const NewHeader = () => {
  return (
    <header className={s.header}>
      <div className={s.top}>
        <LeftPart />
        <RightPart />
      </div>
      <NavBar />
    </header>
  );
};

const LeftPart = () => {
  const isSmall = useMediaQuery({ query: "(max-width: 768px)" });
  const { t } = useTranslation();

  return (
    <div className={s.left}>
      <NavLink to="/">
        <img src="" alt="brics" />
      </NavLink>
      {!isSmall && <article>{t("article")}</article>}
    </div>
  );
};

const RightPart = () => {
  return (
    <div className={s.right}>
      <Languages />
      <LoginButton />
    </div>
  );
};

const Languages = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <span className={s.languages}>
      <ConfigProvider>
        <Button
          disabled={i18n.language === "ru"}
          onClick={() => changeLanguage("ru")}
          type="text"
        >
          {t("languages.ru")}
        </Button>
        <Button
          disabled={i18n.language === "en"}
          onClick={() => changeLanguage("en")}
          type="text"
        >
          {t("languages.en")}
        </Button>
      </ConfigProvider>
    </span>
  );
};

const LoginButton = () => {
  const { t } = useTranslation();
  return (
    <span>
      <ConfigProvider>
        <Button href="/cabinet" icon={<UserOutlined />}>
          {t("cabinet")}
        </Button>
        <div style={{ minWidth: "250px" }}>
          <Button href="/login" icon={<LoginOutlined />}>
            {t("become_participant")}
          </Button>
        </div>
      </ConfigProvider>
    </span>
  );
};

const NavBar = () => {
  const { t } = useTranslation();

  const items = [
    {
      key: "main",
      label: (
        <NavLink to="/">
          {t('home')}
        </NavLink>
      ),
    },
    {
      key: "news",
      label: (
        <NavLink to="/news">
          {t('news')}
        </NavLink>
      ),
    },
    {
      key: "calendar",
      label: (
        <NavLink to="/calendar">
          {t('events_calendar')}
        </NavLink>
      ),
    },
    {
      key: "about",
      label: (
        <NavLink to="/about">
          {t('about_project')}
        </NavLink>
      ),
    },
  ];

  return (
    <div className={s.nav}>
      <ConfigProvider>
        <Menu className="custom-submenu-title" style={{ justifyContent: "center" }} mode="horizontal" items={items} />
      </ConfigProvider>
    </div>
  );
}

export default NewHeader;
