src/
├── api/ # Quản lý endpoint tập trung (giống Swagger client)
│ ├── auth.api.ts # export const login = ...
│ ├── user.api.ts
│ └── index.ts # Centralized API export
│
├── assets/ # Tài nguyên tĩnh được xử lý bởi build tool
│ ├── icons/ # SVG icons (thường dùng làm Icon Component)
│ ├── images/
│ └── styles/ # Global CSS, Tailwind base, Themes
│
├── components/ # SHARED COMPONENTS (Atomic Design)
│ ├── elements/ # Các thành phần nhỏ nhất (Button, Input, Badge)
│ │ └── Button/
│ │ ├── Button.tsx
│ │ ├── Button.stories.tsx # Dùng cho Storybook (Senior rất hay dùng)
│ │ └── index.ts
│ ├── forms/ # Các thành phần form (SelectField, InputField)
│ ├── feedback/ # Skeleton, Toast, Spinner
│ ├── overlay/ # Modal, Drawer, Tooltip
│ └── index.ts # Barrel file để import tập trung
│
├── features/ # DOMAIN DRIVEN DESIGN (Mỗi module là một thế giới)
│ ├── auth/ # Module Xác thực
│ │ ├── api/ # Login/Register hooks
│ │ ├── components/ # LoginForm, RegisterForm, SocialLogin
│ │ ├── hooks/ # useAuth (quản lý login state)
│ │ ├── stores/ # AuthStore (Zustand/Redux)
│ │ ├── types/ # User, AuthResponse interfaces
│ │ └── index.ts # Public API cho feature này
│ ├── home/ # Module Trang chủ
│ │ ├── components/ # Hero, Statistics, FeatureList
│ │ └── index.ts
│ └── orders/ # Module Đơn hàng (Phức tạp)
│ ├── api/ # getOrders, updateOrderStatus
│ ├── components/ # OrderTable, OrderFilter, OrderStatusBadge
│ ├── hooks/ # useOrderAction, useOrderList
│ └── types/ # Order, OrderItem, ShipInfo
│
├── hooks/ # CUSTOM HOOKS (Dùng chung toàn app)
│ ├── useDebounce.ts
│ ├── useLocalStorage.ts
│ └── usePermissions.ts # Check quyền User (Role-based access)
│
├── layouts/ # CÁC KHUNG GIAO DIỆN
│ ├── MainLayout/ # Có Navbar + Footer
│ ├── AuthLayout/ # Chỉ có form ở giữa, background khác
│ └── DashboardLayout/ # Có Sidebar bên trái
│
├── lib/ # CẤU HÌNH THƯ VIỆN BÊN THỨ 3 (Infrastructure)
│ ├── axios.ts # Setup Interceptors (Refresh token logic nằm ở đây)
│ ├── react-query.ts # Global config cho TanStack Query
│ └── dayjs.ts # Cấu hình timezone, locale cho xử lý ngày tháng
│
├── pages/ # ROUTE COMPONENTS (Nơi lắp ghép các features)
│ ├── auth/
│ │ ├── login.page.tsx
│ │ └── register.page.tsx
│ ├── home.page.tsx
│ └── orders/
│ ├── order-list.page.tsx
│ └── order-detail.page.tsx
│
├── providers/ # CONTEXT PROVIDERS (Bọc toàn bộ app)
│ ├── AppProvider.tsx # Nơi tập hợp tất cả các provider
│ └── AuthProvider.tsx
│
├── routes/ # CẤU HÌNH ROUTING
│ ├── index.tsx # File tổng điều phối
│ ├── protected.tsx # Các route cần login
│ └── public.tsx # Các route tự do
│
├── stores/ # GLOBAL STORES (Chỉ chứa state thực sự global)
│ └── useNotificationStore.ts
│
├── testing/ # TESTING UTILS
│ ├── server.ts # MSW (Mock Service Worker) để giả lập API khi test
│ └── test-utils.tsx # Custom render cho Unit Test
│
├── types/ # GLOBAL TYPES
│ └── common.ts # Pagination, API Response, v.v.
└── utils/ # PURE FUNCTIONS
├── format-date.ts
└── validate-schema.ts # Zod/Yup schemas
