import { FC } from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";

export const Breadcrumbs: FC = () => {
  const routes = [
    { path: "/users/:id", breadcrumb: "User Info" },
    { path: "/users", breadcrumb: "All Users" },
  ];
  const breadcrumbs = useBreadcrumbs(routes);
  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        {breadcrumbs.map(({ breadcrumb, match: { url } }, i) => (
          <Breadcrumb.Item key={i}>
            <Link to={url}>{breadcrumb}</Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </>
  );
};
