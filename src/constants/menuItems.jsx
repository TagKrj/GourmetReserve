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
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 14.665H5C3.89543 14.665 3 15.5605 3 16.665V19.665C3 20.7696 3.89543 21.665 5 21.665H19C20.1046 21.665 21 20.7696 21 19.665V16.665C21 15.5605 20.1046 14.665 19 14.665Z" stroke="currentColor" stroke-width="2" />
                <path d="M10 4.16504H5C3.89543 4.16504 3 5.06047 3 6.16504V9.16504C3 10.2696 3.89543 11.165 5 11.165H10" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                <path d="M17 11.665C19.2091 11.665 21 9.87418 21 7.66504C21 5.4559 19.2091 3.66504 17 3.66504C14.7909 3.66504 13 5.4559 13 7.66504C13 9.87418 14.7909 11.665 17 11.665Z" stroke="currentColor" stroke-width="2" />
                <path d="M17 9.16504C17.8284 9.16504 18.5 8.49347 18.5 7.66504C18.5 6.83661 17.8284 6.16504 17 6.16504C16.1716 6.16504 15.5 6.83661 15.5 7.66504C15.5 8.49347 16.1716 9.16504 17 9.16504Z" fill="currentColor" />
            </svg>

        ),
        hasSubmenu: true,
        submenu: [
            {
                id: 'schedule',
                label: 'スケジュール表',
                icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
                        <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" />
                        <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" />
                        <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
                        <rect x="7" y="14" width="3" height="3" fill="currentColor" />
                        <rect x="14" y="14" width="3" height="3" fill="currentColor" />
                    </svg>
                )
            },
            {
                id: 'list',
                label: '予約一覧',
                icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M8 6h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M8 12h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M8 18h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M3 6h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M3 12h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M3 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                )
            },
            {
                id: 'register',
                label: '予約登録',
                icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2" />
                        <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" />
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                )
            }
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
