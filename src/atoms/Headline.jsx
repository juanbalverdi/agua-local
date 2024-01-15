import { useStyles } from '../StylesContext';

export const Headline = () => {
  const { styles } = useStyles();

  return (
    <div
      className="headline"
      style={{ background: styles.backgroundColor, color: styles.textColor }}
    >
      <h1 className="h1-headline">Find your Template</h1>
      <p className="p-headline">
        Jumpstart your app development process with pre-built solutions from
        Vercel and our community.
      </p>
    </div>
  );
};
