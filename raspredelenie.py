# Простых работников добавлять сюда
easy_workers = [
    'Влад Петров',
    'Лиза Петрова',
    'Дарья Муха',
    'Максим Шалашников',     
    ]

# Средних работников добавлять сюда
middle_workers = [
    'Евгений Шалугин',
    'Андрей Васильев', 
    'Валера Ермоленко',
]

# Сложных работников добавлять сюда
hard_workers = [ 
    'Никита Ефимчик',
]
easy_tasks = [
    'COM_NN_D', 'NZER_N_B', 'ADD_1N_N', 'LCM_NN_N', 'ABS_Z_N',
    'POZ_Z_D', 'MUL_ZM_Z', 'TRANS_Z_N', 'TRANS_N_Z', 'TRANS_Z_Q',
    'TRANS_Q_Z', 'NMR_P_P', 'INT_Q_B', 'MUL_QQ_Q', 'ADD_QQ_Q',
    'SUB_QQ_Q', 'DIV_QQ_Q', 'RED_QQ_Q', 'LED_P_Q', 'DEG_P_N',

]
middle_tasks = [
    'ADD_NN_N', 'SUB_NN_N', 'MUL_ND_N', 'MUL_Nk_N', 'MUL_NN_N',
    'SUB_NDN_N', 'DIV_NN_Dk', 'DIV_NN_N', 'MOD_NN_N', 'GCD_NN_N', 'ADD_ZZ_Z',
    'SUB_ZZ_Z', 'MUL_ZZ_Z', 'DIV_ZZ_Z', 'MOD_ZZ_Z', 'FAC_P_Q',
    'DER_P_P', 
]
hard_task = [
    'ADD_PP_P', 'SUB_PP_P', 'MUL_PQ_P', 'MUL_Pxk_P', 'MUL_PP_P', 'DIV_PP_P',
    'MOD_PP_P', 'GCD_PP_P',
]

def give_tasks(tasks, workers):
    task_per_one = len(tasks) // len(workers)
    # print(tasks[:task_per_one])
    for k, i in enumerate(workers):
        t = tasks[k * task_per_one : k * task_per_one + task_per_one]
        print(f'{str(i)}: {t}')
    if (len(tasks) % len(workers)):
        m = tasks[len(workers) - 1 * task_per_one:]
        print(f"Остаток: {m}")
    print('\n\n')

print("Легкие задачи: ")
give_tasks(easy_tasks, easy_workers)
        
print("Средние задачи: ")
give_tasks(middle_tasks, middle_workers)

print("Сложные задачи: ")
give_tasks(hard_task, hard_workers)
