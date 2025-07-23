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
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5013 2.33203H2.5013C2.04106 2.33203 1.66797 2.70513 1.66797 3.16536V18.1654C1.66797 18.6256 2.04106 18.9987 2.5013 18.9987H17.5013C17.9615 18.9987 18.3346 18.6256 18.3346 18.1654V3.16536C18.3346 2.70513 17.9615 2.33203 17.5013 2.33203Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                        <path d="M1.66797 6.49805H18.3346" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5 9.83203H6.66667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.16797 9.83203H10.8346" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.332 9.83203H14.9987" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5 12.748H6.66667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.16797 12.748H10.8346" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.332 12.748H14.9987" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5 15.665H6.66667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.16797 15.665H10.8346" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.332 15.665H14.9987" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                )
            },
            {
                id: 'list',
                label: '予約一覧',
                icon: (
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.33203 10.665H18.332" stroke="#8C8C8C" stroke-width="0.5" />
                        <path d="M8.33203 10.665H18.332" stroke="#8C8C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.33203 16.498H18.332" stroke="#8C8C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.33203 4.83203H18.332" stroke="#8C8C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.0013 14.832H1.66797V18.1654H5.0013V14.832Z" stroke="#8C8C8C" stroke-width="2" stroke-linejoin="round" />
                        <path d="M5.0013 8.99805H1.66797V12.3314H5.0013V8.99805Z" stroke="#8C8C8C" stroke-width="2" stroke-linejoin="round" />
                        <path d="M5.0013 3.16504H1.66797V6.49837H5.0013V3.16504Z" stroke="#8C8C8C" stroke-width="2" stroke-linejoin="round" />
                    </svg>

                )
            },
            {
                id: 'register',
                label: '予約登録',
                icon: (
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.15 7.36415L15.5362 6.97795C16.1761 6.33808 17.2135 6.33808 17.8534 6.97795C18.4933 7.61783 18.4933 8.65528 17.8534 9.29515L17.4672 9.68135M15.15 7.36415C15.15 7.36415 15.1983 8.18483 15.9224 8.90895C16.6466 9.63308 17.4672 9.68135 17.4672 9.68135M15.15 7.36415L11.5995 10.9147C11.359 11.1552 11.2388 11.2754 11.1354 11.408C11.0134 11.5644 10.9088 11.7336 10.8235 11.9126C10.7511 12.0644 10.6974 12.2257 10.5898 12.5484L10.2455 13.5814L10.1341 13.9156M17.4672 9.68135L13.9167 13.2319C13.6762 13.4724 13.556 13.5926 13.4234 13.696C13.267 13.818 13.0978 13.9226 12.9187 14.0079C12.767 14.0802 12.6056 14.134 12.283 14.2416L11.25 14.5859L10.9158 14.6973M10.9158 14.6973L10.5816 14.8087C10.4228 14.8616 10.2478 14.8203 10.1294 14.7019C10.0111 14.5836 9.96976 14.4086 10.0227 14.2498L10.1341 13.9156M10.9158 14.6973L10.1341 13.9156" stroke="#8C8C8C" stroke-width="1.5" />
                        <path d="M6.66797 11.498H8.7513" stroke="#8C8C8C" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M6.66797 8.16504H12.0846" stroke="#8C8C8C" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M6.66797 14.832H7.91797" stroke="#8C8C8C" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M2.5 12.332V8.9987C2.5 5.856 2.5 4.28465 3.47631 3.30834C4.45262 2.33203 6.02397 2.33203 9.16667 2.33203H10.8333C13.976 2.33203 15.5474 2.33203 16.5237 3.30834M17.5 12.332C17.5 15.4747 17.5 17.0461 16.5237 18.0224M3.47631 18.0224C4.45262 18.9987 6.02397 18.9987 9.16667 18.9987H10.8333C13.976 18.9987 15.5474 18.9987 16.5237 18.0224M16.5237 18.0224C17.3096 17.2365 17.4629 16.065 17.4928 13.9987" stroke="#8C8C8C" stroke-width="1.5" stroke-linecap="round" />
                    </svg>

                )
            }
        ]
    },
    {
        id: ' テーブル管理',
        label: ' テーブル管理',
        icon: (
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5 3.66504H3.5C2.94772 3.66504 2.5 4.11275 2.5 4.66504V12.665C2.5 13.2173 2.94772 13.665 3.5 13.665H20.5C21.0523 13.665 21.5 13.2173 21.5 12.665V4.66504C21.5 4.11275 21.0523 3.66504 20.5 3.66504Z" stroke="#8C8C8C" stroke-width="2" stroke-linejoin="round" />
                <path d="M6 13.665V21.665V13.665Z" fill="#8C8C8C" />
                <path d="M6 13.665V21.665" stroke="#8C8C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18 17.165H6H18Z" fill="#8C8C8C" />
                <path d="M18 17.165H6" stroke="#8C8C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 21.665H4H8Z" fill="#8C8C8C" />
                <path d="M8 21.665H4" stroke="#8C8C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20 21.665H16H20Z" fill="#8C8C8C" />
                <path d="M20 21.665H16" stroke="#8C8C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18 13.665V21.665V13.665Z" fill="#8C8C8C" />
                <path d="M18 13.665V21.665" stroke="#8C8C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ),
        hasSubmenu: true,
        submenu: [
            {
                id: 'table-register',
                label: 'テーブル登録',
                icon: (
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5013 2.33203H2.5013C2.04106 2.33203 1.66797 2.70513 1.66797 3.16536V18.1654C1.66797 18.6256 2.04106 18.9987 2.5013 18.9987H17.5013C17.9615 18.9987 18.3346 18.6256 18.3346 18.1654V3.16536C18.3346 2.70513 17.9615 2.33203 17.5013 2.33203Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                        <path d="M1.66797 6.49805H18.3346" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5 9.83203H6.66667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.16797 9.83203H10.8346" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.332 9.83203H14.9987" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5 12.748H6.66667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.16797 12.748H10.8346" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.332 12.748H14.9987" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5 15.665H6.66667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.16797 15.665H10.8346" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.332 15.665H14.9987" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                )
            },
            {
                id: 'table-reservation-slots',
                label: 'テーブル予約受付枠数',
                icon: (
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.15 7.36415L15.5362 6.97795C16.1761 6.33808 17.2135 6.33808 17.8534 6.97795C18.4933 7.61783 18.4933 8.65528 17.8534 9.29515L17.4672 9.68135M15.15 7.36415C15.15 7.36415 15.1983 8.18483 15.9224 8.90895C16.6466 9.63308 17.4672 9.68135 17.4672 9.68135M15.15 7.36415L11.5995 10.9147C11.359 11.1552 11.2388 11.2754 11.1354 11.408C11.0134 11.5644 10.9088 11.7336 10.8235 11.9126C10.7511 12.0644 10.6974 12.2257 10.5898 12.5484L10.2455 13.5814L10.1341 13.9156M17.4672 9.68135L13.9167 13.2319C13.6762 13.4724 13.556 13.5926 13.4234 13.696C13.267 13.818 13.0978 13.9226 12.9187 14.0079C12.767 14.0802 12.6056 14.134 12.283 14.2416L11.25 14.5859L10.9158 14.6973M10.9158 14.6973L10.5816 14.8087C10.4228 14.8616 10.2478 14.8203 10.1294 14.7019C10.0111 14.5836 9.96976 14.4086 10.0227 14.2498L10.1341 13.9156M10.9158 14.6973L10.1341 13.9156" stroke="currentColor" stroke-width="1.5" />
                        <path d="M6.66797 11.498H8.7513" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M6.66797 8.16504H12.0846" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M6.66797 14.832H7.91797" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M2.5 12.332V8.9987C2.5 5.856 2.5 4.28465 3.47631 3.30834C4.45262 2.33203 6.02397 2.33203 9.16667 2.33203H10.8333C13.976 2.33203 15.5474 2.33203 16.5237 3.30834M17.5 12.332C17.5 15.4747 17.5 17.0461 16.5237 18.0224M3.47631 18.0224C4.45262 18.9987 6.02397 18.9987 9.16667 18.9987H10.8333C13.976 18.9987 15.5474 18.9987 16.5237 18.0224M16.5237 18.0224C17.3096 17.2365 17.4629 16.065 17.4928 13.9987" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                )
            },
        ]
    },
    {
        id: 'コース管理',
        label: 'コース管理',
        icon: (
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 2.66504V22.665" stroke="#8C8C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 3.16504V8.16504C4 10.665 7 10.665 7 10.665C7 10.665 10 10.665 10 8.16504V3.16504" stroke="#8C8C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15 6.66504C15 2.66504 19 2.66504 19 2.66504V11.165H15V6.66504Z" fill="white" />
                <path d="M19 11.165H15V6.66504C15 2.66504 19 2.66504 19 2.66504V11.165ZM19 11.165V22.665" stroke="#8C8C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ),
        hasSubmenu: true,
        submenu: [
            {
                id: 'course-list',
                label: 'コース一覧',
                icon: (
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.33203 10.665H18.332" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.33203 16.498H18.332" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.33203 4.83203H18.332" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.0013 14.832H1.66797V18.1654H5.0013V14.832Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                        <path d="M5.0013 8.99805H1.66797V12.3314H5.0013V8.99805Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                        <path d="M5.0013 3.16504H1.66797V6.49837H5.0013V3.16504Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                    </svg>
                )
            },
            {
                id: 'course-register-edit',
                label: 'コース登録・編集',
                icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_225_234373)">
                            <path d="M7.91797 12L9.10844 13.3333L12.0846 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.66797 9.99989C1.66797 6.07151 1.66797 4.10733 2.88836 2.88694C3.92238 1.85292 5.49036 1.69501 8.33464 1.6709M18.3346 9.99989C18.3346 6.07151 18.3346 4.10733 17.1142 2.88694C16.0802 1.85292 14.5122 1.69501 11.668 1.6709" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M8.33464 18.3333C6.00108 18.3333 4.83431 18.3333 3.94301 17.8792C3.159 17.4797 2.52158 16.8423 2.12211 16.0583C1.66797 15.167 1.66797 14.0002 1.66797 11.6667C1.66797 9.33311 1.66797 8.16634 2.12211 7.27504C2.52158 6.49103 3.159 5.85361 3.94301 5.45414C4.83431 5 6.00108 5 8.33464 5H11.668C14.0015 5 15.1683 5 16.0596 5.45414C16.8436 5.85361 17.481 6.49103 17.8805 7.27504C18.3346 8.16634 18.3346 9.33311 18.3346 11.6667C18.3346 14.0002 18.3346 15.167 17.8805 16.0583C17.481 16.8423 16.8436 17.4797 16.0596 17.8792C15.1683 18.3333 14.0015 18.3333 11.668 18.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_225_234373">
                                <rect width="20" height="20" rx="5" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                )
            },
            {
                id: 'course-availability',
                label: 'コースの利用可能日',
                icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_225_234379)">
                            <path d="M13.5968 7.46256C13.8913 7.1713 13.8939 6.69643 13.6027 6.40192C13.3114 6.10741 12.8366 6.10478 12.542 6.39604L13.5968 7.46256ZM8.44531 11.5024L8.9727 12.0357L13.5968 7.46256L13.0694 6.9293L12.542 6.39604L7.91793 10.9692L8.44531 11.5024Z" fill="currentColor" />
                            <path d="M15.531 13.0583C14.5225 16.0838 14.0183 17.5966 13.2788 18.0265C12.5754 18.4354 11.7066 18.4354 11.0031 18.0265C10.2637 17.5966 9.7594 16.0838 8.75089 13.0583C8.58896 12.5725 8.50799 12.3296 8.37208 12.1266C8.24036 11.9298 8.07134 11.7608 7.87458 11.6291C7.67155 11.4931 7.42865 11.4122 6.94286 11.2502C3.91733 10.2417 2.40457 9.73748 1.97468 8.99803C1.56573 8.29458 1.56573 7.42577 1.97468 6.72232C2.40457 5.98287 3.91733 5.47861 6.94286 4.47011M16.6894 9.58317L16.9614 8.76717C18.211 5.01852 18.8357 3.14419 17.8463 2.1548C16.857 1.16541 14.9826 1.79018 11.234 3.03973L10.3537 3.33317" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_225_234379">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                )
            }
        ]
    },
    {
        id: '顧客管理',
        label: '顧客管理',
        icon: (
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 10.665C14.2091 10.665 16 8.87418 16 6.66504C16 4.4559 14.2091 2.66504 12 2.66504C9.79086 2.66504 8 4.4559 8 6.66504C8 8.87418 9.79086 10.665 12 10.665Z" fill="#8C8C8C" stroke="#8C8C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21 22.665C21 17.6945 16.9706 13.665 12 13.665C7.02945 13.665 3 17.6945 3 22.665" stroke="#8C8C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ),
        hasSubmenu: true,
        submenu: [
            {
                id: 'customer-list',
                label: '顧客一覧',
                icon: (
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.33203 10.665H18.332" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.33203 16.498H18.332" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.33203 4.83203H18.332" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.0013 14.832H1.66797V18.1654H5.0013V14.832Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                        <path d="M5.0013 8.99805H1.66797V12.3314H5.0013V8.99805Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                        <path d="M5.0013 3.16504H1.66797V6.49837H5.0013V3.16504Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                    </svg>
                )
            },
            {
                id: 'customer-register-edit',
                label: '顧客登録・編集',
                icon: (
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.15 7.36415L15.5362 6.97795C16.1761 6.33808 17.2135 6.33808 17.8534 6.97795C18.4933 7.61783 18.4933 8.65528 17.8534 9.29515L17.4672 9.68135M15.15 7.36415C15.15 7.36415 15.1983 8.18483 15.9224 8.90895C16.6466 9.63308 17.4672 9.68135 17.4672 9.68135M15.15 7.36415L11.5995 10.9147C11.359 11.1552 11.2388 11.2754 11.1354 11.408C11.0134 11.5644 10.9088 11.7336 10.8235 11.9126C10.7511 12.0644 10.6974 12.2257 10.5898 12.5484L10.2455 13.5814L10.1341 13.9156M17.4672 9.68135L13.9167 13.2319C13.6762 13.4724 13.556 13.5926 13.4234 13.696C13.267 13.818 13.0978 13.9226 12.9187 14.0079C12.767 14.0802 12.6056 14.134 12.283 14.2416L11.25 14.5859L10.9158 14.6973M10.9158 14.6973L10.5816 14.8087C10.4228 14.8616 10.2478 14.8203 10.1294 14.7019C10.0111 14.5836 9.96976 14.4086 10.0227 14.2498L10.1341 13.9156M10.9158 14.6973L10.1341 13.9156" stroke="currentColor" stroke-width="1.5" />
                        <path d="M6.66797 11.498H8.7513" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M6.66797 8.16504H12.0846" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M6.66797 14.832H7.91797" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M2.5 12.332V8.9987C2.5 5.856 2.5 4.28465 3.47631 3.30834C4.45262 2.33203 6.02397 2.33203 9.16667 2.33203H10.8333C13.976 2.33203 15.5474 2.33203 16.5237 3.30834M17.5 12.332C17.5 15.4747 17.5 17.0461 16.5237 18.0224M3.47631 18.0224C4.45262 18.9987 6.02397 18.9987 9.16667 18.9987H10.8333C13.976 18.9987 15.5474 18.9987 16.5237 18.0224M16.5237 18.0224C17.3096 17.2365 17.4629 16.065 17.4928 13.9987" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    </svg>

                )
            },
            {
                id: 'customer-bulk-register',
                label: '顧客登録・顧客-括登録',
                icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.33203 18.3335H6.66536M16.6654 18.3335H9.9987" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M11.5721 3.05228L12.19 2.43436C13.2138 1.41055 14.8737 1.41055 15.8975 2.43436C16.9213 3.45816 16.9213 5.11807 15.8975 6.14187L15.2796 6.75979M11.5721 3.05228C11.5721 3.05228 11.6493 4.36535 12.8079 5.52395C13.9665 6.68255 15.2796 6.75979 15.2796 6.75979M11.5721 3.05228L5.89125 8.7331C5.50647 9.11788 5.31409 9.31027 5.14863 9.52239C4.95345 9.77263 4.78612 10.0434 4.64959 10.3299C4.53385 10.5727 4.44782 10.8308 4.27574 11.3471L3.54657 13.5346M15.2796 6.75979L12.4392 9.60021M9.59877 12.4406C9.21399 12.8254 9.0216 13.0178 8.80947 13.1832C8.55924 13.3784 8.28849 13.5457 8.00202 13.6823C7.75916 13.798 7.50105 13.8841 6.98482 14.0561L4.79731 14.7853M4.79731 14.7853L4.26259 14.9635C4.00855 15.0482 3.72847 14.9821 3.53912 14.7927C3.34977 14.6034 3.28365 14.3233 3.36833 14.0693L3.54657 13.5346M4.79731 14.7853L3.54657 13.5346" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    </svg>

                )
            },
            {
                id: 'customer-detail',
                label: '顧客詳細',
                icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7.4987" cy="7.50016" r="1.66667" stroke="currentColor" stroke-width="1.5" />
                        <path d="M10.8346 12.5002C10.8346 13.4206 10.8346 14.1668 7.5013 14.1668C4.16797 14.1668 4.16797 13.4206 4.16797 12.5002C4.16797 11.5797 5.66035 10.8335 7.5013 10.8335C9.34225 10.8335 10.8346 11.5797 10.8346 12.5002Z" stroke="currentColor" stroke-width="1.5" />
                        <path d="M18.3346 10.0002C18.3346 13.1429 18.3346 14.7142 17.3583 15.6905C16.382 16.6668 14.8107 16.6668 11.668 16.6668H8.33463C5.19194 16.6668 3.62059 16.6668 2.64428 15.6905C1.66797 14.7142 1.66797 13.1429 1.66797 10.0002C1.66797 6.85747 1.66797 5.28612 2.64428 4.30981C3.62059 3.3335 5.19194 3.3335 8.33464 3.3335H11.668C14.8107 3.3335 16.382 3.3335 17.3583 4.30981C17.7497 4.70114 17.9841 5.18808 18.1246 5.8335" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M15.832 10H12.4987" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M15.832 7.5H11.6654" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M15.832 12.5H13.332" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    </svg>

                )
            }
        ]
    },
    {
        id: '集計分析',
        label: '集計分析',
        icon: (
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.2552 12.665C22.2552 18.1879 17.7594 22.665 12.2135 22.665C6.66768 22.665 2.17188 18.1879 2.17188 12.665C2.17188 7.14219 6.66768 2.66504 12.2135 2.66504V12.665H22.2552Z" stroke="#8C8C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.796 9.66528H15.2266V3.12305C18.3496 4.09987 20.8152 6.55518 21.796 9.66528Z" stroke="#8C8C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ),
        hasSubmenu: true,
        submenu: [
            {
                id: 'analytics-dashboard',
                label: 'ダッシュボード',
                icon: (
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5013 2.33203H2.5013C2.04106 2.33203 1.66797 2.70513 1.66797 3.16536V18.1654C1.66797 18.6256 2.04106 18.9987 2.5013 18.9987H17.5013C17.9615 18.9987 18.3346 18.6256 18.3346 18.1654V3.16536C18.3346 2.70513 17.9615 2.33203 17.5013 2.33203Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                        <path d="M1.66797 6.49805H18.3346" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5 9.83203H6.66667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.16797 9.83203H10.8346" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.332 9.83203H14.9987" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5 12.748H6.66667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.16797 12.748H10.8346" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.332 12.748H14.9987" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5 15.665H6.66667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.16797 15.665H10.8346" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.332 15.665H14.9987" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                )
            },
            {
                id: 'analytics-customer-count',
                label: '客数',
                icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_225_234556)">
                            <path d="M18.3346 18.3335H1.66797" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M17.5 18.3335V12.0835C17.5 11.3931 16.9404 10.8335 16.25 10.8335H13.75C13.0596 10.8335 12.5 11.3931 12.5 12.0835V18.3335" stroke="currentColor" stroke-width="1.5" />
                            <path d="M12.5 18.3332V7.49984M7.5 18.3332V4.1665C7.5 2.98799 7.5 2.39874 7.86612 2.03262C8.23223 1.6665 8.82149 1.6665 10 1.6665C11.1785 1.6665 11.7678 1.6665 12.1339 2.03262C12.5 2.39874 12.5 2.98799 12.5 4.1665V4.1665" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.5 18.3332V7.9165C7.5 7.22615 6.94036 6.6665 6.25 6.6665H3.75C3.05964 6.6665 2.5 7.22615 2.5 7.9165V13.3332M2.5 18.3332V16.4582" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_225_234556">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                )
            },
            {
                id: 'analytics-by-category',
                label: '項目別',
                icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.33203 18.3335H6.66536M16.6654 18.3335H9.9987" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M11.5721 3.05228L12.19 2.43436C13.2138 1.41055 14.8737 1.41055 15.8975 2.43436C16.9213 3.45816 16.9213 5.11807 15.8975 6.14187L15.2796 6.75979M11.5721 3.05228C11.5721 3.05228 11.6493 4.36535 12.8079 5.52395C13.9665 6.68255 15.2796 6.75979 15.2796 6.75979M11.5721 3.05228L5.89125 8.7331C5.50647 9.11788 5.31409 9.31027 5.14863 9.52239C4.95345 9.77263 4.78612 10.0434 4.64959 10.3299C4.53385 10.5727 4.44782 10.8308 4.27574 11.3471L3.54657 13.5346M15.2796 6.75979L12.4392 9.60021M9.59877 12.4406C9.21399 12.8254 9.0216 13.0178 8.80947 13.1832C8.55924 13.3784 8.28849 13.5457 8.00202 13.6823C7.75916 13.798 7.50105 13.8841 6.98482 14.0561L4.79731 14.7853M4.79731 14.7853L4.26259 14.9635C4.00855 15.0482 3.72847 14.9821 3.53912 14.7927C3.34977 14.6034 3.28365 14.3233 3.36833 14.0693L3.54657 13.5346M4.79731 14.7853L3.54657 13.5346" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    </svg>

                )
            },
            {
                id: 'analytics-comparison',
                label: '比較',
                icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_225_234572)">
                            <path d="M18.3346 18.3332H10.0013C6.07293 18.3332 4.10875 18.3332 2.88836 17.1128C1.66797 15.8924 1.66797 13.9282 1.66797 9.99984V7.49984M1.66797 1.6665V4.1665" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M15.8335 5.8335L13.2351 9.1055C12.8371 9.6067 12.6381 9.8573 12.4096 9.97943C12.0584 10.1672 11.6386 10.1764 11.2795 10.004C11.0459 9.89194 10.8362 9.65023 10.4168 9.16681C9.99737 8.68341 9.78765 8.4417 9.5541 8.32962C9.19499 8.15729 8.77525 8.16641 8.42397 8.3542C8.19551 8.47633 7.9965 8.72692 7.59849 9.22811L5 12.5002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_225_234572">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                )
            }
        ]
    }
];

export const bottomMenuItems = [
    {
        id: '設定',
        label: '設定',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.1419 21.5854C7.46635 21.0866 5.9749 20.1604 4.79393 18.9333C5.2345 18.4111 5.5 17.7365 5.5 16.9998C5.5 15.343 4.15685 13.9998 2.5 13.9998C2.39977 13.9998 2.3007 14.0048 2.203 14.0144C2.0699 13.3636 2 12.6899 2 11.9998C2 10.9545 2.16039 9.94666 2.4579 8.99951C2.47191 8.99971 2.48594 8.99981 2.5 8.99981C4.15685 8.99981 5.5 7.65666 5.5 5.99981C5.5 5.52416 5.3893 5.07441 5.1923 4.67481C6.34875 3.59951 7.76025 2.79477 9.32605 2.36133C9.8222 3.33385 10.8333 3.99982 12 3.99982C13.1667 3.99982 14.1778 3.33385 14.674 2.36133C16.2398 2.79477 17.6512 3.59951 18.8077 4.67481C18.6107 5.07441 18.5 5.52416 18.5 5.99981C18.5 7.65666 19.8432 8.99981 21.5 8.99981C21.5141 8.99981 21.5281 8.99971 21.5421 8.99951C21.8396 9.94666 22 10.9545 22 11.9998C22 12.6899 21.9301 13.3636 21.797 14.0144C21.6993 14.0048 21.6002 13.9998 21.5 13.9998C19.8432 13.9998 18.5 15.343 18.5 16.9998C18.5 17.7365 18.7655 18.4111 19.2061 18.9333C18.0251 20.1604 16.5336 21.0866 14.8581 21.5854C14.4714 20.3758 13.338 19.4998 12 19.4998C10.662 19.4998 9.5286 20.3758 9.1419 21.5854Z" stroke="#8C8C8C" stroke-width="2" stroke-linejoin="round" />
                <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="#8C8C8C" stroke-width="2" stroke-linejoin="round" />
            </svg>

        )
    },
    {
        id: 'サポート',
        label: 'サポート',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_241_32982" fill="white">
                    <path d="M18 16C20.2092 16 22 14.2092 22 12C22 9.79085 20.2092 8 18 8" />
                </mask>
                <path d="M18 16V16.5C20.4853 16.5 22.5 14.4853 22.5 12H22H21.5C21.5 13.933 19.933 15.5 18 15.5V16ZM22 12H22.5C22.5 9.51471 20.4853 7.5 18 7.5V8V8.5C19.933 8.5 21.5 10.067 21.5 12H22Z" fill="#8C8C8C" mask="url(#path-1-inside-1_241_32982)" />
                <path d="M18 16C20.2092 16 22 14.2092 22 12C22 9.79085 20.2092 8 18 8" stroke="#8C8C8C" stroke-width="2" stroke-linejoin="round" />
                <path d="M6 8C3.79086 8 2 9.79085 2 12C2 14.2092 3.79086 16 6 16" stroke="#8C8C8C" stroke-width="2" stroke-linejoin="round" />
                <path d="M6 16V15.75V14.5V12V8C6 4.68629 8.6863 2 12 2C15.3137 2 18 4.68629 18 8V16C18 19.3137 15.3137 22 12 22" stroke="#8C8C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
