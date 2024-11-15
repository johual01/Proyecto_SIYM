<template>
    <div style="display: flex;">
        <h1>Parametros Iniciales</h1>
        <div style="display: flex; margin-left: 5%; width: 20%;">
            <Button label="Cargar por json" severity="success" @click="visible = true"
                style="margin-right: 1%; width: 100%;" />
            <Button label="Cargar por defecto" severity="help" @click="visible = true" class="comple_screen" />
        </div>
    </div>
    <div class="card flex justify-center" style="margin-top: 1%;">
        <Stepper value="1" linear>
            <StepList>
                <Step value="1">Datos Iniciales</Step>
                <Step value="2">Distribución</Step>
                <Step value="3">Peso</Step>
            </StepList>
            <StepPanels>
                <StepPanel v-slot="{ activateCallback }" value="1">
                    <div style="display: flex; justify-content: center;">
                        <div class="Card_content" style="width: 50%;">
                            <h2>Datos Principales</h2>
                            <div class="flex cen">
                                <div class="card_ini">
                                    <h4>Número de agentes</h4>
                                    <InputNumber v-model="numagentes" inputId="minmax-buttons" mode="decimal"
                                        showButtons :min="0" fluid />
                                </div>
                                <div class="card_ini">
                                    <h4>Número de infectados</h4>
                                    <InputNumber v-model="numinfectados" inputId="minmax-buttons" mode="decimal"
                                        showButtons :min="0" fluid />
                                </div>
                            </div>
                            <div class="Card_content">
                                <h2>Ambiental Parameters</h2>
                                <div style="display: flex; justify-content: space-around; align-items: center;">
                                    <div>
                                        <h4>Cuarentena</h4>
                                        <InputGroup>
                                            <div class="flex cen">
                                                <div class="space_right">
                                                    <Checkbox v-model="apquarentine" binary />
                                                </div>
                                            </div>
                                        </InputGroup>
                                    </div>
                                    <div>
                                        <h4>Uso de máscara</h4>
                                        <InputGroup>
                                            <div class="flex cen">
                                                <div class="space_right">
                                                    <Checkbox v-model="apmaskUse" binary />
                                                </div>
                                            </div>
                                        </InputGroup>
                                    </div>
                                    <div>
                                        <h4>Distancia social</h4>
                                        <InputGroup>
                                            <div class="flex cen">
                                                <div class="space_right">
                                                    <Checkbox v-model="apsocialDistance" binary />
                                                </div>
                                            </div>
                                        </InputGroup>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="Card_content" style="width: 50%;">
                            <h2>Limites Ajustables</h2>
                            <div class="">
                                <div>
                                    <h4>Porcentaje de contagio</h4>
                                    <InputGroup>
                                        <div class="flex" style="align-items: center; width: 100%;">
                                            <div class="space_right">
                                                Maximo
                                            </div>
                                            <InputNumber v-model="porcen_c_max" inputId="minmax-buttons"
                                                :minFractionDigits="2" mode="decimal" showButtons step="0.01"
                                                :min="porcen_c_min" :max="100" fluid class="space_right width_8" />
                                            <div class="space_right">
                                                Minimo
                                            </div>
                                            <InputNumber v-model="porcen_c_min" inputId="minmax-buttons"
                                                :minFractionDigits="2" mode="decimal" showButtons step="0.01" :min="0"
                                                :max="porcen_c_max" fluid class="space_right width_8" />
                                        </div>
                                    </InputGroup>
                                </div>
                                <div>
                                    <h4>Tiempo de recuperación</h4>
                                    <InputGroup>
                                        <div class="flex" style="align-items: center; width: 100%;">
                                            <div class="space_right">
                                                Maximo
                                            </div>
                                            <InputNumber v-model="tiemp_r_max" inputId="minmax-buttons"
                                                :minFractionDigits="2" mode="decimal" showButtons step="0.01"
                                                :min="tiemp_r_min" fluid
                                                style="width: 8rem; margin-bottom: 5%; margin-right: 5%; " />
                                            <div class="space_right">
                                                Minimo
                                            </div>
                                            <InputNumber v-model="tiemp_r_min" inputId="minmax-buttons"
                                                :minFractionDigits="2" mode="decimal" showButtons step="0.01" :min="0"
                                                :max="tiemp_r_max" fluid class="space_right width_8" />
                                        </div>
                                    </InputGroup>
                                </div>
                                <div>
                                    <h4>Porcentaje de muerte</h4>
                                    <InputGroup>
                                        <div class="flex" style="align-items: center; width: 100%;">
                                            <div class="space_right">
                                                Maximo
                                            </div>
                                            <InputNumber v-model="porcen_m_max" inputId="minmax-buttons"
                                                :minFractionDigits="2" mode="decimal" showButtons step="0.01"
                                                :min="porcen_m_min" :max="100" fluid class="space_right width_8" />
                                            <div class="space_right">
                                                Minimo
                                            </div>
                                            <InputNumber v-model="porcen_m_min" inputId="minmax-buttons"
                                                :minFractionDigits="2" mode="decimal" showButtons step="0.01" :min="0"
                                                :max="porcen_m_max" fluid class="space_right width_8" />
                                        </div>
                                    </InputGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pt-6" style="display: flex; justify-content: flex-end;">
                        <Button label="Siguiente" @click="activateCallback('2')" />
                    </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="2">
                    <div class="Card_content">
                        <div>
                            <div style="display: flex; justify-content: space-around;">
                                <div class="comple_screen">
                                    <h2>Edad Poblacional</h2>
                                    <InputGroup>
                                        <div class="comple_screen">
                                            <div class="flex cen">
                                                <div class="space_right">
                                                    Neonatal
                                                </div>
                                                <InputNumber v-model="d_paneo" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Niño
                                                </div>
                                                <InputNumber v-model="d_pakid" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Joven
                                                </div>
                                                <InputNumber v-model="d_payoung" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                            </div>
                                            <div class="flex cen">
                                                <div class="space_right">
                                                    Adulto
                                                </div>
                                                <InputNumber v-model="d_paadult" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Viejo
                                                </div>
                                                <InputNumber v-model="d_paold" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Más antiguo
                                                </div>
                                                <InputNumber v-model="d_paoldest" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                            </div>
                                        </div>
                                    </InputGroup>
                                </div>
                                <div class="comple_screen">
                                    <h2>Condición de salud</h2>
                                    <InputGroup>
                                        <div class="comple_screen">
                                            <div class="flex cen">
                                                <div class="space_right">
                                                    Atlética
                                                </div>
                                                <InputNumber v-model="d_hcathetic" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Saludable
                                                </div>
                                                <InputNumber v-model="d_hchealthy" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                            </div>
                                            <div class="flex cen">
                                                <div class="space_right">
                                                    Sedentario
                                                </div>
                                                <InputNumber v-model="d_hcsedentary" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Comorbilidad
                                                </div>
                                                <InputNumber v-model="d_hccomorbility" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                            </div>
                                        </div>
                                    </InputGroup>
                                </div>
                                <div class="comple_screen">
                                    <h2>Movilidad</h2>
                                    <InputGroup>
                                        <div class="comple_screen">
                                            <div class="flex cen">
                                                <div style="margin-right: 2%;">
                                                    Restringido
                                                </div>
                                                <InputNumber v-model="d_mrestricted" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    style="width: 8rem; margin-right: 2%;" />
                                                <div style="margin-right: 2%;">
                                                    Constante
                                                </div>
                                                <InputNumber v-model="d_mconstant" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    style="width: 8rem;  margin-right: 2%;" />
                                                <div style="margin-right: 2%;">
                                                    Intermitente
                                                </div>
                                                <InputNumber v-model="d_mintermitent" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    style="width: 8rem; margin-right: 2%;" />
                                            </div>
                                        </div>
                                    </InputGroup>
                                    <h2>Atención</h2>
                                    <InputGroup>
                                        <div class="comple_screen">
                                            <div class="flex cen">
                                                <div class="space_right">
                                                    Bajo
                                                </div>
                                                <InputNumber v-model="d_alow" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Medio
                                                </div>
                                                <InputNumber v-model="d_amedium" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Alto
                                                </div>
                                                <InputNumber v-model="d_ahigh" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                            </div>
                                        </div>
                                    </InputGroup>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="comple_screen">
                                    <h2>Distribución salarial</h2>
                                    <InputGroup>
                                        <div class="comple_screen">
                                            <div class="flex cen">
                                                <div class="space_right" style="width: 15%;">
                                                    La Mitad Del Salario Mínimo
                                                </div>
                                                <InputNumber v-model="d_wdhalfms" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right" style="width: 7%;">
                                                    Salario Mínimo
                                                </div>
                                                <InputNumber v-model="d_wdminis" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right" style="width: 15%;">
                                                    Dos veces el Salario Mínimo
                                                </div>
                                                <InputNumber v-model="d_wdtwoms" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                            </div>
                                            <div class="flex cen">
                                                <div class="space_right">
                                                    Tres veces el Salario Mínimo
                                                </div>
                                                <InputNumber v-model="d_wdthreems" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Cinco veces el Salario Mínimo
                                                </div>
                                                <InputNumber v-model="d_wdfivems" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                            </div>
                                            <div class="flex cen">
                                                <div class="space_right">
                                                    Diez veces el Salario Mínimo
                                                </div>
                                                <InputNumber v-model="d_wdtenms" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Mas de Doce veces el Salario Mínimo
                                                </div>
                                                <InputNumber v-model="d_wdmorettms" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                            </div>
                                        </div>
                                    </InputGroup>
                                </div>
                                <div class="comple_screen">
                                    <h2>Actividad Profesional</h2>
                                    <InputGroup>
                                        <div class="comple_screen">
                                            <div class="flex cen">
                                                <div class="space_right">
                                                    Profesion de Salud
                                                </div>
                                                <InputNumber v-model="d_pacthealthp" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Profesion Esencial
                                                </div>
                                                <InputNumber v-model="d_pactessencialp" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Profesion Normal
                                                </div>
                                                <InputNumber v-model="d_pactnormalp" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                            </div>
                                            <div class="flex cen">
                                                <div class="space_right">
                                                    Estudiante
                                                </div>
                                                <InputNumber v-model="d_pactstudent" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Jubilado
                                                </div>
                                                <InputNumber v-model="d_pactretired" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                            </div>
                                            <div class="flex cen">
                                                <div class="space_right">
                                                    Inactivo
                                                </div>
                                                <InputNumber v-model="d_pactinactive" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Doméstico
                                                </div>
                                                <InputNumber v-model="d_pactdomestic" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                            </div>
                                        </div>
                                    </InputGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pt-6" style="display: flex; justify-content: space-between;">
                        <Button label="Atras" severity="secondary" @click="activateCallback('1')" />
                        <Button label="Siguiente" iconPos="right" @click="activateCallback('3')" />
                    </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="3">
                    <div class="Card_content">
                        <div>
                            <div style="display: flex; justify-content: space-around;">
                                <div class="comple_screen">
                                    <h2>Edad Poblacional</h2>
                                    <InputGroup>
                                        <div class="comple_screen">
                                            <div class="flex cen">
                                                <div class="space_right">
                                                    Neonatal
                                                </div>
                                                <InputNumber v-model="w_paneo" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Niño
                                                </div>
                                                <InputNumber v-model="w_pakid" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Joven
                                                </div>
                                                <InputNumber v-model="w_payoung" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                            </div>
                                            <div class="flex cen">
                                                <div class="space_right">
                                                    Adulto
                                                </div>
                                                <InputNumber v-model="w_paadult" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Viejo
                                                </div>
                                                <InputNumber v-model="w_paold" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Más antiguo
                                                </div>
                                                <InputNumber v-model="w_paoldest" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                            </div>
                                        </div>
                                    </InputGroup>
                                </div>
                                <div class="comple_screen">
                                    <h2>Condición de salud</h2>
                                    <InputGroup>
                                        <div class="comple_screen">
                                            <div class="flex cen">
                                                <div class="space_right">
                                                    Atlética
                                                </div>
                                                <InputNumber v-model="w_hcathetic" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Saludable
                                                </div>
                                                <InputNumber v-model="w_hchealthy" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                            </div>
                                            <div class="flex cen">
                                                <div class="space_right">
                                                    Sedentario
                                                </div>
                                                <InputNumber v-model="w_hcsedentary" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Comorbilidad
                                                </div>
                                                <InputNumber v-model="w_hccomorbility" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                            </div>
                                        </div>
                                    </InputGroup>
                                </div>
                                <div class="comple_screen">
                                    <h2>Movilidad</h2>
                                    <InputGroup>
                                        <div class="comple_screen">
                                            <div class="flex cen">
                                                <div style="margin-right: 2%;">
                                                    Restringido
                                                </div>
                                                <InputNumber v-model="w_mrestricted" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    style="width: 8rem; margin-right: 2%;" />
                                                <div style="margin-right: 2%;">
                                                    Constante
                                                </div>
                                                <InputNumber v-model="w_mconstant" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    style="width: 8rem;  margin-right: 2%;" />
                                                <div style="margin-right: 2%;">
                                                    Intermitente
                                                </div>
                                                <InputNumber v-model="w_mintermitent" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    style="width: 8rem; margin-right: 2%;" />
                                            </div>
                                        </div>
                                    </InputGroup>
                                    <h2>Atención</h2>
                                    <InputGroup>
                                        <div class="comple_screen">
                                            <div class="flex cen">
                                                <div class="space_right">
                                                    Bajo
                                                </div>
                                                <InputNumber v-model="w_alow" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Medio
                                                </div>
                                                <InputNumber v-model="w_amedium" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Alto
                                                </div>
                                                <InputNumber v-model="w_ahigh" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                            </div>
                                        </div>
                                    </InputGroup>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="comple_screen">
                                    <h2>Distribución salarial</h2>
                                    <InputGroup>
                                        <div class="comple_screen">
                                            <div class="flex cen">
                                                <div class="space_right" style="width: 15%;">
                                                    La Mitad Del Salario Mínimo
                                                </div>
                                                <InputNumber v-model="w_wdhalfms" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right" style="width: 7%;">
                                                    Salario Mínimo
                                                </div>
                                                <InputNumber v-model="w_wdminis" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right" style="width: 15%;">
                                                    Dos veces el Salario Mínimo
                                                </div>
                                                <InputNumber v-model="w_wdtwoms" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                            </div>
                                            <div class="flex cen">
                                                <div class="space_right">
                                                    Tres veces el Salario Mínimo
                                                </div>
                                                <InputNumber v-model="w_wdthreems" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Cinco veces el Salario Mínimo
                                                </div>
                                                <InputNumber v-model="w_wdfivems" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                            </div>
                                            <div class="flex cen">
                                                <div class="space_right">
                                                    Diez veces el Salario Mínimo
                                                </div>
                                                <InputNumber v-model="w_wdtenms" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Mas de Doce veces el Salario Mínimo
                                                </div>
                                                <InputNumber v-model="w_wdmorettms" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                            </div>
                                        </div>
                                    </InputGroup>
                                </div>
                                <div class="comple_screen">
                                    <h2>Actividad Profesional</h2>
                                    <InputGroup>
                                        <div class="comple_screen">
                                            <div class="flex cen">
                                                <div class="space_right">
                                                    Profesion de Salud
                                                </div>
                                                <InputNumber v-model="w_pacthealthp" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Profesion Esencial
                                                </div>
                                                <InputNumber v-model="w_pactessencialp" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Profesion Normal
                                                </div>
                                                <InputNumber v-model="w_pactnormalp" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                            </div>
                                            <div class="flex cen">
                                                <div class="space_right">
                                                    Estudiante
                                                </div>
                                                <InputNumber v-model="w_pactstudent" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Jubilado
                                                </div>
                                                <InputNumber v-model="w_pactretired" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                            </div>
                                            <div class="flex cen">
                                                <div class="space_right">
                                                    Inactivo
                                                </div>
                                                <InputNumber v-model="w_pactinactive" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                                <div class="space_right">
                                                    Doméstico
                                                </div>
                                                <InputNumber v-model="w_pactdomestic" inputId="minmax-buttons"
                                                    :minFractionDigits="2" mode="decimal" showButtons step="0.01" fluid
                                                    class="space_right width_8" />
                                            </div>
                                        </div>
                                    </InputGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pt-6" style="display: flex; justify-content: space-between;">
                        <Button label="Back" severity="secondary" @click="activateCallback('2')" />
                        <Button severity="success" style="margin-right: 1%;">
                            <router-link to="/Simulacion">Iniciar Simulacion</router-link>
                        </Button>
                    </div>
                </StepPanel>
            </StepPanels>
        </Stepper>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<script setup>
import { ref, onMounted } from 'vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputNumber from 'primevue/inputnumber';
import InputGroup from 'primevue/inputgroup';
import ProgressSpinner from 'primevue/progressspinner';
import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import StepPanels from 'primevue/steppanels';
import StepItem from 'primevue/stepitem';
import Step from 'primevue/step';
import StepPanel from 'primevue/steppanel';
import Chart from 'primevue/chart';
import Checkbox from 'primevue/checkbox';
import Card from 'primevue/card';
const visible = ref(false);
/* Datos iniciales*/
const numagentes = ref(0);
const numinfectados = ref(0);


/*distribution*/
/*poblationalAge*/
const d_paneo = ref(0);
const d_pakid = ref(0);
const d_payoung = ref(0);
const d_paadult = ref(0);
const d_paold = ref(0);
const d_paoldest = ref(0);

/* healthCondition*/
const d_hcathetic = ref(0);
const d_hchealthy = ref(0);
const d_hcsedentary = ref(0);
const d_hccomorbility = ref(0);

/*movility*/
const d_mrestricted = ref(0);
const d_mconstant = ref(0);
const d_mintermitent = ref(0);

/*atention*/
const d_alow = ref(0);
const d_amedium = ref(0);
const d_ahigh = ref(0);

/*wealthyDistribution*/
const d_wdhalfms = ref(0);
const d_wdminis = ref(0);
const d_wdtwoms = ref(0);
const d_wdthreems = ref(0);
const d_wdfivems = ref(0);
const d_wdtenms = ref(0);
const d_wdmorettms = ref(0);

/*profesionalActivity*/
const d_pacthealthp = ref(0);
const d_pactessencialp = ref(0);
const d_pactnormalp = ref(0);
const d_pactstudent = ref(0);
const d_pactretired = ref(0);
const d_pactinactive = ref(0);
const d_pactdomestic = ref(0);


/*weight*/
/*poblationalAge*/
const w_paneo = ref(0);
const w_pakid = ref(0);
const w_payoung = ref(0);
const w_paadult = ref(0);
const w_paold = ref(0);
const w_paoldest = ref(0);

/* healthCondition*/
const w_hcathetic = ref(0);
const w_hchealthy = ref(0);
const w_hcsedentary = ref(0);
const w_hccomorbility = ref(0);

/*movility*/
const w_mrestricted = ref(0);
const w_mconstant = ref(0);
const w_mintermitent = ref(0);

/*atention*/
const w_alow = ref(0);
const w_amedium = ref(0);
const w_ahigh = ref(0);

/*wealthyDistribution*/
const w_wdhalfms = ref(0);
const w_wdminis = ref(0);
const w_wdtwoms = ref(0);
const w_wdthreems = ref(0);
const w_wdfivems = ref(0);
const w_wdtenms = ref(0);
const w_wdmorettms = ref(0);

/*profesionalActivity*/
const w_pacthealthp = ref(0);
const w_pactessencialp = ref(0);
const w_pactnormalp = ref(0);
const w_pactstudent = ref(0);
const w_pactretired = ref(0);
const w_pactinactive = ref(0);
const w_pactdomestic = ref(0);

/*Limites*/
const porcen_c_min = ref(0);
const porcen_c_max = ref(0);
const tiemp_r_max = ref(0);
const tiemp_r_min = ref(0);
const porcen_m_max = ref(0);
const porcen_m_min = ref(0);

/*ambientalParameters*/
const apquarentine = ref(false);
const apmaskUse = ref(false);
const apsocialDistance = ref(false);


const json = {
    "agents": numagentes,
    "infected": numinfectados,
    "distribution": {
        "poblationalAge": {
            "neonatal": d_paneo,
            "kid": d_pakid,
            "young": d_payoung,
            "adult": d_paadult,
            "old": d_paold,
            "oldest": d_paoldest
        },
        "healthCondition": {
            "athetic": d_hcathetic,
            "healthy": d_hchealthy,
            "sedentary": d_hcsedentary,
            "comorbility": d_hccomorbility
        },
        "movility": {
            "restricted": d_mrestricted,
            "constant": d_mconstant,
            "intermitent": d_mintermitent
        },
        "atention": {
            "low": d_alow,
            "medium": d_amedium,
            "high": d_ahigh
        },
        "wealthyDistribution": {
            "halfMinimumSalary": d_wdhalfms,
            "minimumSalary": d_wdminis,
            "twoMinimumSalary": d_wdtwoms,
            "threeMinimumSalary": d_wdthreems,
            "fiveMinimumSalary": d_wdfivems,
            "tenMinimumSalary": d_wdtenms,
            "moreThanTwelveMinimumSalary": d_wdmorettms
        },
        "profesionalActivity": {
            "healthProfesional": d_pacthealthp,
            "essentialProfesional": d_pactessencialp,
            "normalProfesional": d_pactnormalp,
            "student": d_pactstudent,
            "retired": d_pactretired,
            "inactive": d_pactinactive,
            "domestic": d_pactdomestic
        }
    },
    "weight": {
        "poblationalAge": {
            "neonatal": w_paneo,
            "kid": w_pakid,
            "young": w_payoung,
            "adult": w_paadult,
            "old": w_paold,
            "oldest": w_paoldest
        },
        "healthCondition": {
            "athetic": w_hcathetic,
            "healthy": w_hchealthy,
            "sedentary": w_hcsedentary,
            "comorbility": w_hccomorbility
        },
        "movility": {
            "restricted": w_mrestricted,
            "constant": w_mconstant,
            "intermitent": w_mintermitent
        },
        "atention": {
            "low": w_alow,
            "medium": w_amedium,
            "high": w_ahigh
        },
        "wealthyDistribution": {
            "halfMinimumSalary": w_wdhalfms,
            "minimumSalary": w_wdminis,
            "twoMinimumSalary": w_wdtwoms,
            "threeMinimumSalary": w_wdthreems,
            "fiveMinimumSalary": w_wdfivems,
            "tenMinimumSalary": w_wdtenms,
            "moreThanTwelveMinimumSalary": w_wdmorettms
        },
        "profesionalActivity": {
            "healthProfesional": w_pacthealthp,
            "essentialProfesional": w_pactessencialp,
            "normalProfesional": w_pactnormalp,
            "student": w_pactstudent,
            "retired": w_pactretired,
            "inactive": w_pactinactive,
            "domestic": w_pactdomestic
        }
    },
    "ambientalParameters": {
        "quarentine": apquarentine,
        "maskUse": apmaskUse,
        "socialDistance": apsocialDistance
    },
    "contagiousPercentage": {
        "minimum": porcen_c_min,
        "maximum": porcen_c_max
    },
    "recoveryTime": {
        "minimum": tiemp_r_min,
        "maximum": tiemp_r_max
    },
    "deathPercentage": {
        "minimum": porcen_m_min,
        "maximum": porcen_m_max
    }
}
</script>

<style scoped>
a {
    color: white;
}

.comple_screen {
    width: 100%;
    margin-left: 1%;
    margin-right: 1%;
}

h2 {
    font-weight: 700;
    border-bottom: 1px solid white;
    margin-bottom: 0.5%;
}

.space_right {
    margin-bottom: 5%;
    margin-right: 2%;
}

.width_8 {
    width: 5rem !important;
}

.p-stepper {
    width: 100%;
    height: 100%;
    margin-right: 4%;
}

.Card_content {
    padding: 1%;
    margin: 1%;
}


.flex {
    display: flex;
    justify-content: center;
}

.card_ini {
    margin: 2%;
}

.card_ini h4 {
    width: 200px;
}

.p-inputtext {
    border-radius: 0 !important;
}

.p-inputgroup {
    justify-content: center;
}

.mar_ini {
    margin-right: 1%;
}
</style>
<style>
.p-step-active .p-step-title,
.p-stepper .p-step-active .p-step-number {
    color: #fd5050 !important;
}

.p-step:has(~ .p-step-active) .p-stepper-separator {
    background: #fd5050 !important;
}

span.p-step-title {
    color: white;
}

.p-steppanels .p-steppanel {
    border: 0.5px solid #2f3664;
    border-radius: 20px;
    background-color: #2f3664;
    padding: 0.5%;
    box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.25),
        10px 10px 70px rgba(0, 0, 0, 0.25),
        inset 5px 5px 20px rgba(255, 255, 255, 0.25),
        inset -5px -5px 15px rgba(0, 0, 0, 0.75);
    color: white;
}
</style>