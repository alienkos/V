export const AppStore = {
    students: [],
    logs: [],
    restitusiList: [],
    restitusiRequests: [],
    attendanceData: [],
    kasTransactions: [],
    violationPresets: [],
    goodPresets: [], 
    tasks: [],
    taskSubmissions: [],
    studentMessages: [],
    kasAlerts: {}, 
    
    appSettings: {
        school_name: "SDN 4 Rambutan",
        class_name: "Kelas 5",
        guru_name: "Bella Lifia, S.Pd.",
        guru_nip: "19940812 202012 2 012",
        kepsek_name: "H. Mulyadi, M.Pd.",
        kepsek_nip: "19720503 199603 1 003",
        app_version: "v2.6.0-Ocean"
    },

    currentStudent: null,
    activeAdminTab: 'siswa',
    currentStudentSubTab: 'karakter',
    expandedTaskId: null,
    activeRestitusiSubTab: 'pending',
    activeTaskTabFilter: 'Semua',
    activeTaskCategoryFilter: 'Semua',
    isDesktopMode: false
};

export function loadLocalBackup() {
    if (localStorage.getItem('br_students')) AppStore.students = JSON.parse(localStorage.getItem('br_students'));
    if (localStorage.getItem('br_logs')) AppStore.logs = JSON.parse(localStorage.getItem('br_logs'));
    if (localStorage.getItem('br_restitusi_list')) AppStore.restitusiList = JSON.parse(localStorage.getItem('br_restitusi_list'));
    if (localStorage.getItem('br_restitusi_req')) AppStore.restitusiRequests = JSON.parse(localStorage.getItem('br_restitusi_req'));
    if (localStorage.getItem('br_attendance')) AppStore.attendanceData = JSON.parse(localStorage.getItem('br_attendance'));
    if (localStorage.getItem('br_kas')) AppStore.kasTransactions = JSON.parse(localStorage.getItem('br_kas'));
    if (localStorage.getItem('br_presets')) AppStore.violationPresets = JSON.parse(localStorage.getItem('br_presets'));
    if (localStorage.getItem('br_good_presets')) AppStore.goodPresets = JSON.parse(localStorage.getItem('br_good_presets'));
    if (localStorage.getItem('br_tasks')) AppStore.tasks = JSON.parse(localStorage.getItem('br_tasks'));
    if (localStorage.getItem('br_submissions')) AppStore.taskSubmissions = JSON.parse(localStorage.getItem('br_submissions'));
    if (localStorage.getItem('br_settings')) AppStore.appSettings = JSON.parse(localStorage.getItem('br_settings'));
    if (localStorage.getItem('br_kas_alerts')) AppStore.kasAlerts = JSON.parse(localStorage.getItem('br_kas_alerts'));
    if (localStorage.getItem('br_student_messages')) AppStore.studentMessages = JSON.parse(localStorage.getItem('br_student_messages'));
}

export function saveLocalBackup() {
    localStorage.setItem('br_students', JSON.stringify(AppStore.students));
    localStorage.setItem('br_logs', JSON.stringify(AppStore.logs));
    localStorage.setItem('br_restitusi_list', JSON.stringify(AppStore.restitusiList));
    localStorage.setItem('br_restitusi_req', JSON.stringify(AppStore.restitusiRequests));
    localStorage.setItem('br_attendance', JSON.stringify(AppStore.attendanceData));
    localStorage.setItem('br_kas', JSON.stringify(AppStore.kasTransactions));
    localStorage.setItem('br_presets', JSON.stringify(AppStore.violationPresets));
    localStorage.setItem('br_good_presets', JSON.stringify(AppStore.goodPresets));
    localStorage.setItem('br_tasks', JSON.stringify(AppStore.tasks));
    localStorage.setItem('br_submissions', JSON.stringify(AppStore.taskSubmissions));
    localStorage.setItem('br_settings', JSON.stringify(AppStore.appSettings));
    localStorage.setItem('br_kas_alerts', JSON.stringify(AppStore.kasAlerts));
    localStorage.setItem('br_student_messages', JSON.stringify(AppStore.studentMessages));
}