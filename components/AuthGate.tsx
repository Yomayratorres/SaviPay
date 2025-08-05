import { useAuth } from '@/hooks/useAuth';
import { Redirect, Stack } from 'expo-router';

export default function AuthGate() {
    const { user, loading } = useAuth();
    console.log('AuthGate:', { user, loading });
    if (loading) return null;

    if (!user) {
        console.log('Redirecting to login...');
        return <Redirect href="/auth/login" />;
    }
    return (
        <Stack>
            <Stack.Screen name="auth" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
        </Stack>
    );
}
