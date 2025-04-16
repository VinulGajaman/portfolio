type Props = {
  Icon: React.ReactNode; // The icon component to display
  href: string;
}

const SmallSocialButtons = ({ Icon, href }: Props) => {

  // Define a reusable button class
  const buttonBaseCSS = "text-primary-500 hover:text-white rounded-full border-2 border-primary-500 text-sm px-4 py-2 mb-2 font-bold transition-transform duration-200 hover:scale-105 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-800 dark:focus:ring-primary-500";
  const buttonHoverCSS = "hover:bg-primary-c hover:border-primary-500 hover:shadow-neon-primary dark:hover:shadow-neon-primary-dark-hover";

  return (
    <>
      <a className={`${buttonBaseCSS} ${buttonHoverCSS}`} href={href}>
        {Icon}
      </a>
    </>
  )
}

export default SmallSocialButtons