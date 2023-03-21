import { View, Modal, ModalProps, TouchableOpacity, Text } from 'react-native';
import { HeaderText } from '../HeaderText';
import { THEME } from '../../../theme';
import { styles } from './styles';


interface Props extends ModalProps{
  title: string;
  subtitle?: string;
  buttonPatternFunc: () => void;
  cancelButton?: boolean;
  titleButtonPattern?: String;
  titleButtonCancel?: String;
  colorButton?: string;
  colorTextButtons?: String,
  cancelFunc?: () => void;
}

export function ModalAlert({title, subtitle, buttonPatternFunc, cancelButton, titleButtonPattern, titleButtonCancel,colorButton, colorTextButtons,cancelFunc,...rest} : Props) {
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
          {
            cancelButton?
            <TouchableOpacity onPress={cancelFunc} style={[styles.buttonPattern, { backgroundColor: colorButton? colorButton : THEME.COLORS.SUCCESS}]}>
              <Text style={[styles.textButton, {color: colorTextButtons? colorTextButtons : THEME.COLORS.TEXT_LIGHT}]}>
              {titleButtonCancel}
              </Text>
            </TouchableOpacity>: 
            <View></View>
            }
            <TouchableOpacity onPress={buttonPatternFunc} style={[styles.buttonPattern, { backgroundColor: colorButton? colorButton : THEME.COLORS.SUCCESS}]}>
              <Text style={[styles.textButton, {color: colorTextButtons? colorTextButtons : THEME.COLORS.TEXT_LIGHT}]}>
               {titleButtonPattern}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>  
    </Modal>
    
  );
}