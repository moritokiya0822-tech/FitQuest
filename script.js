'use strict';

document.addEventListener('DOMContentLoaded', () => {
    
    // ログインフォームの送信イベントを制御
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // デフォルトのページ遷移を無効化
            
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            
            const email = emailInput ? emailInput.value : '';
            const password = passwordInput ? passwordInput.value : '';
            
            // SPA開発担当者向けのモック処理
            console.log('[Auth] Login attempt:', { email });
            alert(`ログイン処理を開始します。\nメールアドレス: ${email}`);
            
            // TODO: ここにAPI通信（fetchやaxiosなど）の処理を記述します
        });
    }

    // ソーシャルログインボタンのイベントを制御
    const socialButtons = document.querySelectorAll('.js-social-login');
    
    socialButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const provider = event.currentTarget.getAttribute('data-provider');
            
            console.log(`[Auth] Social login attempt via ${provider}`);
            alert(`${provider}でのログイン処理`);
            
            // TODO: ここに各プロバイダー（OAuth等）のリダイレクト処理を記述します
        });
    });

});