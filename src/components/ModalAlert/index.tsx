import { View, Modal, ModalProps, TouchableOpacity, Text } from 'react-native';
import { HeaderText } from '../HeaderText';

import { styles } from './styles';

interface Props extends ModalProps{
  title: string;
  subtitle: string;
  buttonPatternFunc: () => void;
  cancelButton?: boolean;
  cancelFunc?: () => void;
}

export function ModalAlert({title, subtitle, buttonPatternFunc, cancelButton ,cancelFunc,...rest} : Props) {
  return (
    <Modal
    animationType='fade'
    {...rest}
    >
      <View style={styles.container}>
        <View style={styles.content}> 
          <HeaderText
           title={title}
           subtitle={subtitle}
          
          />
          <View style={styles.containerButtons}>
            <TouchableOpacity onPress={buttonPatternFunc} style={styles.buttonPattern}>
              <Text style={styles.textButton}>
                OK
              </Text>
            </TouchableOpacity>
            {
            cancelButton?
            <TouchableOpacity onPress={cancelFunc}>
              <Text style={styles.textButton}>
                Cancelar
              </Text>
            </TouchableOpacity>: 
            <View></View>
            }
          </View>
        </View>
      </View>  
    </Modal>
    
  );
}