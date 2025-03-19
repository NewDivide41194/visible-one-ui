interface FooterMenuListProps {
    linkArr: string[];
}
export const FooterMenuList = (props: FooterMenuListProps) => {
    const { linkArr } = props;
    return (
        <div>
            <ul className="list-unstyled">
                {linkArr.map((link: string) => <li>
                    <a href={"/"+link} className="text-decoration-none text-light">{link}</a>
                </li>)}
            </ul>
        </div>
    );

}
