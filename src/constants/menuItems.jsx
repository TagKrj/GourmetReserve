export const menuItems = [
    {
        id: 'home',
        label: 'トップ',
        // label: 'home',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" fill="none" />
                <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
        ),
        hasSubmenu: false
    },
    {
        id: '予約の管理',
        label: '予約の管理',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none" />
                <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" />
                <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" />
                <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
            </svg>
        ),
        hasSubmenu: true,
        submenu: [
            { id: 'schedule', label: 'スケジュール表' },
            { id: 'list', label: '予約一覧' },
            { id: 'register', label: '予約登録' }
        ]
    },
    {
        id: '顧客管理',
        label: '顧客管理',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
        ),
        hasSubmenu: true,
        submenu: []
    },
    {
        id: 'コース管理',
        label: 'コース管理',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
        ),
        hasSubmenu: true,
        submenu: []
    },
    {
        id: '集計分析',
        label: '集計分析',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M22 12A10 10 0 0 0 12 2v10z" stroke="currentColor" strokeWidth="2" fill="currentColor" />
            </svg>
        ),
        hasSubmenu: true,
        submenu: []
    },
    {
        id: 'テーブル管理',
        label: 'テーブル管理',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none" />
                <rect x="7" y="7" width="10" height="10" rx="1" ry="1" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
        ),
        hasSubmenu: true,
        submenu: []
    }
];

export const bottomMenuItems = [
    {
        id: '設定',
        label: '設定',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1m17-4a4 4 0 0 1-8 0m0 0a4 4 0 0 1 8 0" stroke="currentColor" strokeWidth="2" />
            </svg>
        )
    },
    {
        id: 'サポート',
        label: 'サポート',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="2" />
            </svg>
        )
    },
    {
        id: 'ログアウト',
        label: 'ログアウト',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="2" />
                <polyline points="16,17 21,12 16,7" stroke="currentColor" strokeWidth="2" />
                <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="2" />
            </svg>
        )
    }
];
