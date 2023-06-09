import { useNavigate } from 'react-router-dom';
import { LoginForm } from '@/features/authentication';
import { Layout } from '@/pages';

export const Login = () => {
  const navigate = useNavigate();

  return (
    <Layout title="Log in to your account">
      {/* <LoginForm onSuccess={() => navigate('/app')} /> */}
      <LoginForm />
    </Layout>
  );
};
