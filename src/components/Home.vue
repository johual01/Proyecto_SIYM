<template>
    <div style="display: flex;">
        <h1>Parametros Iniciales</h1>
        <div style="display: flex; margin-left: 5%; width: 20%;">
            <input type="file" accept=".json" @change="chargeFromFile" style="display: none;" ref="fileInput">
            <Button label="Cargar por JSON" severity="success" @click="$refs.fileInput.click()" style="margin-right: 1%; width: 100%;" />
            <Button label="Cargar por defecto" severity="help" @click="chargeDefault" class="comple_screen" />
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
                                                :minFractionDigits="0" mode="decimal" showButtons step="0.01"
                                                :min="tiemp_r_min" fluid
                                                style="width: 8rem; margin-bottom: 5%; margin-right: 5%; " />
                                            <div class="space_right">
                                                Minimo
                                            </div>
                                            <InputNumber v-model="tiemp_r_min" inputId="minmax-buttons"
                                                :minFractionDigits="0" mode="decimal" showButtons step="0.01" :min="0"
                                                :max="tiemp_r_max" fluid class="space_right width_8" />
                                        </div>
                                    </InputGroup>
                                </div>
                                <div>
                                    <h4>Tiempo de inmunidad</h4>
                                    <InputGroup>
                                        <div class="flex" style="align-items: center; width: 100%;">
                                            <div class="space_right">
                                                Maximo
                                            </div>
                                            <InputNumber v-model="tiemp_i_max" inputId="minmax-buttons"
                                                :minFractionDigits="0" mode="decimal" showButtons step="0.01"
                                                :min="tiemp_i_min" fluid
                                                style="width: 8rem; margin-bottom: 5%; margin-right: 5%; " />
                                            <div class="space_right">
                                                Minimo
                                            </div>
                                            <InputNumber v-model="tiemp_i_min" inputId="minmax-buttons"
                                                :minFractionDigits="0" mode="decimal" showButtons step="0.01" :min="0"
                                                :max="tiemp_i_max" fluid class="space_right width_8" />
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
                        <Button severity="success" style="margin-right: 1%;" @click="startSimulation">
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
import { ref, watch } from 'vue';
import axios from 'axios';
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

/* Datos iniciales */
const numagentes = ref(0);
const numinfectados = ref(0);

/* distribution */
/* poblationalAge */
const d_paneo = ref(0);
const d_pakid = ref(0);
const d_payoung = ref(0);
const d_paadult = ref(0);
const d_paold = ref(0);
const d_paoldest = ref(0);

/* healthCondition */
const d_hcathetic = ref(0);
const d_hchealthy = ref(0);
const d_hcsedentary = ref(0);
const d_hccomorbility = ref(0);

/* movility */
const d_mrestricted = ref(0);
const d_mconstant = ref(0);
const d_mintermitent = ref(0);

/* atention */
const d_alow = ref(0);
const d_amedium = ref(0);
const d_ahigh = ref(0);

/* wealthyDistribution */
const d_wdhalfms = ref(0);
const d_wdminis = ref(0);
const d_wdtwoms = ref(0);
const d_wdthreems = ref(0);
const d_wdfivems = ref(0);
const d_wdtenms = ref(0);
const d_wdmorettms = ref(0);

/* profesionalActivity */
const d_pacthealthp = ref(0);
const d_pactessencialp = ref(0);
const d_pactnormalp = ref(0);
const d_pactstudent = ref(0);
const d_pactretired = ref(0);
const d_pactinactive = ref(0);
const d_pactdomestic = ref(0);

/* weight */
/* poblationalAge */
const w_paneo = ref(0);
const w_pakid = ref(0);
const w_payoung = ref(0);
const w_paadult = ref(0);
const w_paold = ref(0);
const w_paoldest = ref(0);

/* healthCondition */
const w_hcathetic = ref(0);
const w_hchealthy = ref(0);
const w_hcsedentary = ref(0);
const w_hccomorbility = ref(0);

/* movility */
const w_mrestricted = ref(0);
const w_mconstant = ref(0);
const w_mintermitent = ref(0);

/* atention */
const w_alow = ref(0);
const w_amedium = ref(0);
const w_ahigh = ref(0);

/* wealthyDistribution */
const w_wdhalfms = ref(0);
const w_wdminis = ref(0);
const w_wdtwoms = ref(0);
const w_wdthreems = ref(0);
const w_wdfivems = ref(0);
const w_wdtenms = ref(0);
const w_wdmorettms = ref(0);

/* profesionalActivity */
const w_pacthealthp = ref(0);
const w_pactessencialp = ref(0);
const w_pactnormalp = ref(0);
const w_pactstudent = ref(0);
const w_pactretired = ref(0);
const w_pactinactive = ref(0);
const w_pactdomestic = ref(0);

/* Limites */
const porcen_c_min = ref(0);
const porcen_c_max = ref(0);
const tiemp_r_max = ref(0);
const tiemp_r_min = ref(0);
const tiemp_i_max = ref(0);
const tiemp_i_min = ref(0);
const porcen_m_max = ref(0);
const porcen_m_min = ref(0);

/* ambientalParameters */
const apquarentine = ref(false);
const apmaskUse = ref(false);
const apsocialDistance = ref(false);
const chargeFromFile = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/json") {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const json = JSON.parse(e.target.result);
                chargeFromJson(json);
            } catch (error) {
                console.log('Error', error)
                alert("El json ingresado es invalido");
            }
        };
        reader.readAsText(file);
    } else {
        alert("Por favor, ingrese un archivo JSON");
    }
};
const chargeDefault = () => {
    chargeFromJson({
        "agents": 1000,
        "infected": 100,
        "distribution": {
            "poblationalAge": {
                "neonatal": 0.05,
                "kid": 0.2,
                "young": 0.15,
                "adult": 0.35,
                "old": 0.2,
                "oldest": 0.05
            },
            "healthCondition": {
                "athetic": 0.2,
                "healthy": 0.4,
                "sedentary": 0.3,
                "comorbility": 0.1
            },
            "movility": {
                "restricted": 0.3,
                "constant": 0.4,
                "intermitent": 0.3
            },
            "atention": {
                "low": 0.2,
                "medium": 0.5,
                "high": 0.3
            },
            "wealthyDistribution": {
                "halfMinimumSalary": 0.4,
                "minimumSalary": 0.3,
                "twoMinimumSalary": 0.2,
                "threeMinimumSalary": 0.06,
                "fiveMinimumSalary": 0.02,
                "tenMinimumSalary": 0.015,
                "moreThanTwelveMinimumSalary": 0.005
            },
            "profesionalActivity": {
                "healthProfesional": 0.05,
                "essentialProfesional": 0.2,
                "normalProfesional": 0.2,
                "student": 0.3,
                "retired": 0.05,
                "inactive": 0.1,
                "domestic": 0.1
            }
        },
        "weight": {
            "poblationalAge": {
                "neonatal":0.05,
                "kid": 0.2,
                "young": 0.15,
                "adult": 0.35,
                "old": 0.2,
                "oldest": 0.05
            },
            "healthCondition": {
                "athetic": 0.2,
                "healthy": 0.4,
                "sedentary": 0.3,
                "comorbility": 0.1
            },
            "movility": {
                "restricted": 0.3,
                "constant": 0.4,
                "intermitent": 0.3
            },
            "atention": {
                "low": 0.2,
                "medium": 0.5,
                "high": 0.3
            },
            "wealthyDistribution": {
                "halfMinimumSalary": 0.4,
                "minimumSalary": 0.3,
                "twoMinimumSalary": 0.2,
                "threeMinimumSalary": 0.06,
                "fiveMinimumSalary": 0.02,
                "tenMinimumSalary": 0.015,
                "moreThanTwelveMinimumSalary": 0.005
            },
            "profesionalActivity": {
                "healthProfesional": 0.05,
                "essentialProfesional": 0.2,
                "normalProfesional": 0.2,
                "student": 0.3,
                "retired": 0.05,
                "inactive": 0.1,
                "domestic": 0.1
            }
        },
        "ambientalParameters": {
            "quarentine": true,
            "maskUse": true,
            "socialDistance": true
        },
        "contagiousPercentage": {
            "minimum": 0.15,
            "maximum": 0.45
        },
        "recoveryTime": {
            "minimum": 15,
            "maximum": 21
        },
        "inmunityTime": {
            "minimum": 30,
            "maximum":  60
        },
        "deathPercentage": {
            "minimum": 0.35,
            "maximum": 0.6
        },
        "simulation_time": 300
    })
}
const chargeFromJson = (data) => {
    numagentes.value = data?.agents || 1000;
    numinfectados.value = data?.infected || 100;
    d_paneo.value = data?.distribution?.poblationalAge?.neonatal || 0.05;
    d_pakid.value = data?.distribution?.poblationalAge?.kid || 0.2;
    d_payoung.value = data?.distribution?.poblationalAge?.young || 0.15;
    d_paadult.value = data?.distribution?.poblationalAge?.adult || 0.35;
    d_paold.value = data?.distribution?.poblationalAge?.old || 0.2;
    d_paoldest.value = data?.distribution?.poblationalAge?.oldest || 0.05;
    d_hcathetic.value = data?.distribution?.healthCondition?.athetic || 0.2;
    d_hchealthy.value = data?.distribution?.healthCondition?.healthy || 0.4;
    d_hcsedentary.value = data?.distribution?.healthCondition?.sedentary || 0.3;
    d_hccomorbility.value = data?.distribution?.healthCondition?.comorbility || 0.1;
    d_mrestricted.value = data?.distribution?.movility?.restricted || 0.3;
    d_mconstant.value = data?.distribution?.movility?.constant || 0.4;
    d_mintermitent.value = data?.distribution?.movility?.intermitent || 0.3;
    d_alow.value = data?.distribution?.atention?.low || 0.2;
    d_amedium.value = data?.distribution?.atention?.medium || 0.5;
    d_ahigh.value = data?.distribution?.atention?.high || 0.3;
    d_wdhalfms.value = data?.distribution?.wealthyDistribution?.halfMinimumSalary || 0.4;
    d_wdminis.value = data?.distribution?.wealthyDistribution?.minimumSalary || 0.3;
    d_wdtwoms.value = data?.distribution?.wealthyDistribution?.twoMinimumSalary || 0.2;
    d_wdthreems.value = data?.distribution?.wealthyDistribution?.threeMinimumSalary || 0.06;
    d_wdfivems.value = data?.distribution?.wealthyDistribution?.fiveMinimumSalary || 0.02;
    d_wdtenms.value = data?.distribution?.wealthyDistribution?.tenMinimumSalary || 0.015;
    d_wdmorettms.value = data?.distribution?.wealthyDistribution?.moreThanTwelveMinimumSalary || 0.005;
    d_pacthealthp.value = data?.distribution?.profesionalActivity?.healthProfesional || 0.05;
    d_pactessencialp.value = data?.distribution?.profesionalActivity?.essentialProfesional || 0.2;
    d_pactnormalp.value = data?.distribution?.profesionalActivity?.normalProfesional || 0.2;
    d_pactstudent.value = data?.distribution?.profesionalActivity?.student || 0.3;
    d_pactretired.value = data?.distribution?.profesionalActivity?.retired || 0.05;
    d_pactinactive.value = data?.distribution?.profesionalActivity?.inactive || 0.1;
    d_pactdomestic.value = data?.distribution?.profesionalActivity?.domestic || 0.1;
    w_paneo.value = data?.weight?.poblationalAge?.neonatal || 0.05;
    w_pakid.value = data?.weight?.poblationalAge?.kid || 0.2;
    w_payoung.value = data?.weight?.poblationalAge?.young || 0.15;
    w_paadult.value = data?.weight?.poblationalAge?.adult || 0.35;
    w_paold.value = data?.weight?.poblationalAge?.old || 0.2;
    w_paoldest.value = data?.weight?.poblationalAge?.oldest || 0.05;
    w_hcathetic.value = data?.weight?.healthCondition?.athetic || 0.2;
    w_hchealthy.value = data?.weight?.healthCondition?.healthy || 0.4;
    w_hcsedentary.value = data?.weight?.healthCondition?.sedentary || 0.3;
    w_hccomorbility.value = data?.weight?.healthCondition?.comorbility || 0.1;
    w_mrestricted.value = data?.weight?.movility?.restricted || 0.3;
    w_mconstant.value = data?.weight?.movility?.constant || 0.4;
    w_mintermitent.value = data?.weight?.movility?.intermitent || 0.3;
    w_alow.value = data?.weight?.atention?.low || 0.2;
    w_amedium.value = data?.weight?.atention?.medium || 0.5;
    w_ahigh.value = data?.weight?.atention?.high || 0.3;
    w_wdhalfms.value = data?.weight?.wealthyDistribution?.halfMinimumSalary || 0.4;
    w_wdminis.value = data?.weight?.wealthyDistribution?.minimumSalary || 0.3;
    w_wdtwoms.value = data?.weight?.wealthyDistribution?.twoMinimumSalary || 0.2;
    w_wdthreems.value = data?.weight?.wealthyDistribution?.threeMinimumSalary || 0.06;
    w_wdfivems.value = data?.weight?.wealthyDistribution?.fiveMinimumSalary || 0.02;
    w_wdtenms.value = data?.weight?.wealthyDistribution?.tenMinimumSalary || 0.015;
    w_wdmorettms.value = data?.weight?.wealthyDistribution?.moreThanTwelveMinimumSalary || 0.005;
    w_pacthealthp.value = data?.weight?.profesionalActivity?.healthProfesional || 0.05;
    w_pactessencialp.value = data?.weight?.profesionalActivity?.essentialProfesional || 0.2;
    w_pactnormalp.value = data?.weight?.profesionalActivity?.normalProfesional || 0.2;
    w_pactstudent.value = data?.weight?.profesionalActivity?.student || 0.3;
    w_pactretired.value = data?.weight?.profesionalActivity?.retired || 0.05;
    w_pactinactive.value = data?.weight?.profesionalActivity?.inactive || 0.1;
    w_pactdomestic.value = data?.weight?.profesionalActivity?.domestic || 0.1;
    porcen_c_min.value = data?.contagiousPercentage?.minimum || 0.15;
    porcen_c_max.value = data?.contagiousPercentage?.maximum || 0.45;
    tiemp_r_max.value = data?.recoveryTime?.maximum || 21;
    tiemp_r_min.value = data?.recoveryTime?.minimum || 15;
    tiemp_i_max.value = data?.inmunityTime?.maximum || 60;
    tiemp_i_min.value = data?.inmunityTime?.minimum || 30;
    porcen_m_max.value = data?.deathPercentage?.maximum || 0.6;
    porcen_m_min.value = data?.deathPercentage?.minimum || 0.35;
    apquarentine.value = data?.ambientalParameters?.quarentine || true;
    apmaskUse.value = data?.ambientalParameters?.maskUse || true;
    apsocialDistance.value = data?.ambientalParameters?.socialDistance || true;
}
const generateJson = () => {
    return {
        "agents": numagentes.value || 1000,
        "infected": numinfectados.value || 100,
        "distribution": {
            "poblationalAge": {
                "neonatal": d_paneo.value || 0.05,
                "kid": d_pakid.value || 0.2,
                "young": d_payoung.value || 0.15,
                "adult": d_paadult.value || 0.35,
                "old": d_paold.value || 0.2,
                "oldest": d_paoldest.value || 0.05
            },
            "healthCondition": {
                "athetic": d_hcathetic.value || 0.2,
                "healthy": d_hchealthy.value || 0.4,
                "sedentary": d_hcsedentary.value || 0.3,
                "comorbility": d_hccomorbility.value || 0.1
            },
            "movility": {
                "restricted": d_mrestricted.value || 0.3,
                "constant": d_mconstant.value || 0.4,
                "intermitent": d_mintermitent.value || 0.3
            },
            "atention": {
                "low": d_alow.value || 0.2,
                "medium": d_amedium.value || 0.5,
                "high": d_ahigh.value || 0.3
            },
            "wealthyDistribution": {
                "halfMinimumSalary": d_wdhalfms.value || 0.4,
                "minimumSalary": d_wdminis.value || 0.3,
                "twoMinimumSalary": d_wdtwoms.value || 0.2,
                "threeMinimumSalary": d_wdthreems.value || 0.06,
                "fiveMinimumSalary": d_wdfivems.value || 0.02,
                "tenMinimumSalary": d_wdtenms.value || 0.015,
                "moreThanTwelveMinimumSalary": d_wdmorettms.value || 0.005
            },
            "profesionalActivity": {
                "healthProfesional": d_pacthealthp.value || 0.05,
                "essentialProfesional": d_pactessencialp.value || 0.2,
                "normalProfesional": d_pactnormalp.value || 0.2,
                "student": d_pactstudent.value || 0.3,
                "retired": d_pactretired.value || 0.05,
                "inactive": d_pactinactive.value || 0.1,
                "domestic": d_pactdomestic.value || 0.1
            }
        },
        "weight": {
            "poblationalAge": {
                "neonatal": w_paneo.value || 0.05,
                "kid": w_pakid.value || 0.2,
                "young": w_payoung.value || 0.15,
                "adult": w_paadult.value || 0.35,
                "old": w_paold.value || 0.2,
                "oldest": w_paoldest.value || 0.05
            },
            "healthCondition": {
                "athetic": w_hcathetic.value || 0.2,
                "healthy": w_hchealthy.value || 0.4,
                "sedentary": w_hcsedentary.value || 0.3,
                "comorbility": w_hccomorbility.value || 0.1
            },
            "movility": {
                "restricted": w_mrestricted.value || 0.3,
                "constant": w_mconstant.value || 0.4,
                "intermitent": w_mintermitent.value || 0.3
            },
            "atention": {
                "low": w_alow.value || 0.2,
                "medium": w_amedium.value || 0.5,
                "high": w_ahigh.value || 0.3
            },
            "wealthyDistribution": {
                "halfMinimumSalary": w_wdhalfms.value || 0.4,
                "minimumSalary": w_wdminis.value || 0.3,
                "twoMinimumSalary": w_wdtwoms.value || 0.2,
                "threeMinimumSalary": w_wdthreems.value || 0.06,
                "fiveMinimumSalary": w_wdfivems.value || 0.02,
                "tenMinimumSalary": w_wdtenms.value || 0.015,
                "moreThanTwelveMinimumSalary": w_wdmorettms.value || 0.005
            },
            "profesionalActivity": {
                "healthProfesional": w_pacthealthp.value || 0.05,
                "essentialProfesional": w_pactessencialp.value || 0.2,
                "normalProfesional": w_pactnormalp.value || 0.2,
                "student": w_pactstudent.value || 0.3,
                "retired": w_pactretired.value || 0.05,
                "inactive": w_pactinactive.value || 0.1,
                "domestic": w_pactdomestic.value || 0.1
            }
        },
        "ambientalParameters": {
            "quarentine": apquarentine.value || true,
            "maskUse": apmaskUse.value || true,
            "socialDistance": apsocialDistance.value || true
        },
        "contagiousPercentage": {
            "minimum": porcen_c_min.value || 0.15,
            "maximum": porcen_c_max.value || 0.45
        },
        "recoveryTime": {
            "minimum": tiemp_r_min.value || 15,
            "maximum": tiemp_r_max.value || 21
        },
        "inmunityTime": {
            "minimum": tiemp_i_min.value || 30,
            "maximum": tiemp_i_max.value || 60
        },
        "deathPercentage": {
            "minimum": porcen_m_min.value || 0.35,
            "maximum": porcen_m_max.value || 0.6
        },
        "simulation_time": 300
    };
}

const startSimulation = () => {
    const json = generateJson();
    console.log(json);
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/pandemia/start',
        headers: { },
        data: json
    };

    axios.request(config)
    .then((response) => {
        console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
        console.log(error);
    });
}
// Watchers to log changes
watch(numagentes, (newValue) => console.log('numagentes:', newValue));
watch(numinfectados, (newValue) => console.log('numinfectados:', newValue));
watch(d_paneo, (newValue) => console.log('d_paneo:', newValue));
watch(d_pakid, (newValue) => console.log('d_pakid:', newValue));
watch(d_payoung, (newValue) => console.log('d_payoung:', newValue));
watch(d_paadult, (newValue) => console.log('d_paadult:', newValue));
watch(d_paold, (newValue) => console.log('d_paold:', newValue));
watch(d_paoldest, (newValue) => console.log('d_paoldest:', newValue));
watch(d_hcathetic, (newValue) => console.log('d_hcathetic:', newValue));
watch(d_hchealthy, (newValue) => console.log('d_hchealthy:', newValue));
watch(d_hcsedentary, (newValue) => console.log('d_hcsedentary:', newValue));
watch(d_hccomorbility, (newValue) => console.log('d_hccomorbility:', newValue));
watch(d_mrestricted, (newValue) => console.log('d_mrestricted:', newValue));
watch(d_mconstant, (newValue) => console.log('d_mconstant:', newValue));
watch(d_mintermitent, (newValue) => console.log('d_mintermitent:', newValue));
watch(d_alow, (newValue) => console.log('d_alow:', newValue));
watch(d_amedium, (newValue) => console.log('d_amedium:', newValue));
watch(d_ahigh, (newValue) => console.log('d_ahigh:', newValue));
watch(d_wdhalfms, (newValue) => console.log('d_wdhalfms:', newValue));
watch(d_wdminis, (newValue) => console.log('d_wdminis:', newValue));
watch(d_wdtwoms, (newValue) => console.log('d_wdtwoms:', newValue));
watch(d_wdthreems, (newValue) => console.log('d_wdthreems:', newValue));
watch(d_wdfivems, (newValue) => console.log('d_wdfivems:', newValue));
watch(d_wdtenms, (newValue) => console.log('d_wdtenms:', newValue));
watch(d_wdmorettms, (newValue) => console.log('d_wdmorettms:', newValue));
watch(d_pacthealthp, (newValue) => console.log('d_pacthealthp:', newValue));
watch(d_pactessencialp, (newValue) => console.log('d_pactessencialp:', newValue));
watch(d_pactnormalp, (newValue) => console.log('d_pactnormalp:', newValue));
watch(d_pactstudent, (newValue) => console.log('d_pactstudent:', newValue));
watch(d_pactretired, (newValue) => console.log('d_pactretired:', newValue));
watch(d_pactinactive, (newValue) => console.log('d_pactinactive:', newValue));
watch(d_pactdomestic, (newValue) => console.log('d_pactdomestic:', newValue));
watch(w_paneo, (newValue) => console.log('w_paneo:', newValue));
watch(w_pakid, (newValue) => console.log('w_pakid:', newValue));
watch(w_payoung, (newValue) => console.log('w_payoung:', newValue));
watch(w_paadult, (newValue) => console.log('w_paadult:', newValue));
watch(w_paold, (newValue) => console.log('w_paold:', newValue));
watch(w_paoldest, (newValue) => console.log('w_paoldest:', newValue));
watch(w_hcathetic, (newValue) => console.log('w_hcathetic:', newValue));
watch(w_hchealthy, (newValue) => console.log('w_hchealthy:', newValue));
watch(w_hcsedentary, (newValue) => console.log('w_hcsedentary:', newValue));
watch(w_hccomorbility, (newValue) => console.log('w_hccomorbility:', newValue));
watch(w_mrestricted, (newValue) => console.log('w_mrestricted:', newValue));
watch(w_mconstant, (newValue) => console.log('w_mconstant:', newValue));
watch(w_mintermitent, (newValue) => console.log('w_mintermitent:', newValue));
watch(w_alow, (newValue) => console.log('w_alow:', newValue));
watch(w_amedium, (newValue) => console.log('w_amedium:', newValue));
watch(w_ahigh, (newValue) => console.log('w_ahigh:', newValue));
watch(w_wdhalfms, (newValue) => console.log('w_wdhalfms:', newValue));
watch(w_wdminis, (newValue) => console.log('w_wdminis:', newValue));
watch(w_wdtwoms, (newValue) => console.log('w_wdtwoms:', newValue));
watch(w_wdthreems, (newValue) => console.log('w_wdthreems:', newValue));
watch(w_wdfivems, (newValue) => console.log('w_wdfivems:', newValue));
watch(w_wdtenms, (newValue) => console.log('w_wdtenms:', newValue));
watch(w_wdmorettms, (newValue) => console.log('w_wdmorettms:', newValue));
watch(w_pacthealthp, (newValue) => console.log('w_pacthealthp:', newValue));
watch(w_pactessencialp, (newValue) => console.log('w_pactessencialp:', newValue));
watch(w_pactnormalp, (newValue) => console.log('w_pactnormalp:', newValue));
watch(w_pactstudent, (newValue) => console.log('w_pactstudent:', newValue));
watch(w_pactretired, (newValue) => console.log('w_pactretired:', newValue));
watch(w_pactinactive, (newValue) => console.log('w_pactinactive:', newValue));
watch(w_pactdomestic, (newValue) => console.log('w_pactdomestic:', newValue));
watch(porcen_c_min, (newValue) => console.log('porcen_c_min:', newValue));
watch(porcen_c_max, (newValue) => console.log('porcen_c_max:', newValue));
watch(tiemp_r_max, (newValue) => console.log('tiemp_r_max:', newValue));
watch(tiemp_r_min, (newValue) => console.log('tiemp_r_min:', newValue));
watch(tiemp_i_max, (newValue) => console.log('tiemp_i_max:', newValue));
watch(tiemp_i_min, (newValue) => console.log('tiemp_i_min:', newValue));
watch(porcen_m_max, (newValue) => console.log('porcen_m_max:', newValue));
watch(porcen_m_min, (newValue) => console.log('porcen_m_min:', newValue));
watch(apquarentine, (newValue) => console.log('apquarentine:', newValue));
watch(apmaskUse, (newValue) => console.log('apmaskUse:', newValue));
watch(apsocialDistance, (newValue) => console.log('apsocialDistance:', newValue));
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